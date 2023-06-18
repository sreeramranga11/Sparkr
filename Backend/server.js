require('dotenv').config();
const MindsDB = require("mindsdb-js-sdk").default;
const express = require('express');
const bodyParser = require('body-parser');
const promise = require('bluebird');
const axios = require('axios'); 
const pgp = require('pg-promise')({
    promiseLib: promise
});
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

(async() => {
    try {
        await MindsDB.connect({
          user: 'veyyakulashabd@gmail.com',
          password: 'calhacks7'
        });
        console.log('connected');
      
      } catch(error) {
        // Failed to authenticate
        console.log(error);
      }

})();

// AWS RDS PostgreSQL connection details
const cn = {
    host: 'sparkr.cznqycnjnyxb.us-west-1.rds.amazonaws.com', 
    port: '5432', 
    database: 'init_sparkr',
    user: 'sparkr',
    password: 'hello123'
};

const db = pgp(cn); 

app.post('/api/users', async (req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required.' });
    }

    try {
        const user = await db.one('INSERT INTO users(username, email) VALUES($1, $2) RETURNING user_id', [username, email]);
        res.json(user);
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'An error occurred while inserting user' });
    }
});

app.post('/api/project', async (req, res) => {
    const { userId, projectName, promptText } = req.body;

    db.tx(async t => {
        const project = await t.one('INSERT INTO projects(user_id, project_name, project_prompt) VALUES($1, $2, $3) RETURNING project_id', [userId, projectName, promptText]);
        const prompt = await t.one('INSERT INTO prompts(user_id, project_id, project_prompt) VALUES($1, $2, $3) RETURNING prompt_id', [userId, project.project_id, promptText]);
        return { project, prompt };
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred while inserting project or prompt' });
    });
});

app.get('/api/projects/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const projects = await db.any('SELECT * FROM projects WHERE user_id = $1', [userId]);
        res.json(projects);
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).json({ error: 'An error occurred while fetching projects' });
    }
});

app.get('/minds/techstack/:projectId', async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const query = `SELECT project_prompt, tech_stack
                       FROM techstack_predictor
                       WHERE project_prompt = '${projectId}';`;
        const result = await MindsDB.SQL.runQuery(query);
        if (result.rows.length > 0) {
            let techstacks = result.rows[0].tech_stack.split('\n').filter(row => row.trim() !== '');

            let parsedTechStacks = [];
            for(let i=0; i<techstacks.length; i+=3) {
                let tech = {
                    "Technology": techstacks[i].substring(3).trim().slice(2),
                    "Description": techstacks[i+1].substring(3).trim().slice(2),
                    "Experience": techstacks[i+2].substring(3).trim().slice(2)
                }
                parsedTechStacks.push(tech);
            }
            result.rows[0].project_prompt = result.rows[0].project_prompt.replace(/\"/g, "");
            result.rows[0].tech_stack = parsedTechStacks;
        }
        res.send(result.rows);
    } catch (error) {
        console.error(`Error running the query: ${error}`);
        res.status(500).send(`Error running the query: ${error}`);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
