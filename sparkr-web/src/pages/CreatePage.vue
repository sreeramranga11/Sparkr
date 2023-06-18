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

    <button class="button" @click="toProject" >Submit</button>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { useRouter } from 'vue-router';


export default {
  name: "CreatePage",
  components: {
    NavBar,
  },
    setup() {
    const router = useRouter();

    const toProject = () => {
      router.push('/project');
    };

    return {
      toProject
    };
  },
  data() {
    return {
      projectIdea: "",
    };
  },
  methods: {
    navigateToDash() {
      this.$router.push("/project");
    },
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
    cursor: pointer
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
</style>