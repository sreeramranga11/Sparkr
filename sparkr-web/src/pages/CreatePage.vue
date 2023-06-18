<template>
  <div>
    <NavBar />
    <div class="exit">
      <img
        src="../assets/298889_x_icon.png"
        class="icon"
        @click="navigateToDash"
      />
    </div>
    <h1 class="text">Enter Project Idea</h1>
    <center>
      <textarea
        v-model="projectIdea"
        placeholder="Enter Project Idea..."
        class="input-box"
      ></textarea>
    </center>

    <button class="button" @click="toProject">
      <span v-if="!isLoading">Submit</span>
      <span v-else>
        <img src="../assets/loader.gif" class="loader"/>
        <!-- assuming you have a loader gif in your assets -->
      </span>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import NavBar from "../components/NavBar.vue";
import { useRouter } from "vue-router";

export default {
  name: "CreatePage",
  components: {
    NavBar,
  },


 

  setup() {
      const router = useRouter();

    const projectIdea = ref("");
    const isLoading = ref(false); // new reactive variable for loading state
    const store = useStore(); // initialize the Vuex store
    let userId = store.getters.getUserId; // get userId from the store
    console.log(`userIdonCreate: ${userId}`)

    const navigateToDash = () => {
      router.push('/dash'); // Corrected this line
    };


    const toProject = async () => {
      isLoading.value = true; // start loading

      try {
        // Get tech stack
        const responseGet = await fetch(
          `http://Pleasejustworksparkr-env.eba-ttdm78vz.us-west-1.elasticbeanstalk.com/minds/techstack/${projectIdea.value}`
        );
        if (!responseGet.ok) {
          throw new Error("GET API call failed");
        }
        const dataGet = await responseGet.json();
        store.commit("setTechStack", dataGet[0].tech_stack);
        store.commit("setResources", dataGet[0].helpful_videos);

        // Post project
        const responsePost = await fetch(
          `http://Pleasejustworksparkr-env.eba-ttdm78vz.us-west-1.elasticbeanstalk.com/api/project`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userId,
              projectName: "Sparkr Project",
              promptText: projectIdea.value,
            }),
          }
        );

        if (!responsePost.ok) {
          throw new Error("POST API call failed");
        }

        router.push("/project");
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false; // stop loading whether the API call was successful or not
      }
    };

    return {
      projectIdea,
      toProject,
      navigateToDash,
      isLoading
    };
  },
};
</script>

<style scoped>
.button {
  display: block;
  height: 60px;
  width: 250px;
  background-color: #384650;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-left: auto; /* This will align the button to the left */
  margin-right: auto; /* This will align the button to the left */
}

.button:hover {
  cursor: pointer;
}

.text {
  margin-top: 10%;
}

.exit {
  position: absolute;
  left: 50;
  top: 20;
  margin-left: 20px;
}

.input-box {
  display: block;
  width: 50%;
  height: 100px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #e1e8f2;
  font-size: 16px;
  margin-top: 2%;
  margin-bottom: 2%; /* This will add some space between the textarea and the button */
}

.icon {
  width: 36px;
  height: 36px;
  margin-left: 12px;
  margin-top: 20px;
}

.icon:hover {
  cursor: pointer;
}

.loader {
    height: 30px;
    width: 30px;
}
</style>
