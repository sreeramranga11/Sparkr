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
    <div class="body">
      <h1>Tech Stack</h1>
      <div class="tech-scroll">
        <TechBox
          v-for="tech in techstack"
          :key="tech.id"
          :techName="tech.name"
          :techDescription="tech.description"
          :techExperience="tech.experience"
          class="tech-box"
        />
      </div>
      <h1>Resources</h1>
      <div class="tech-scroll">
        <ResourceBox
          v-for="resource in resources"
          :key="resource.id"
          :title="resource.name"
          :link="resource.link"
          class="tech-box"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import TechBox from "../components/TechBox.vue";
import ResourceBox from "../components/ResourceBox.vue";

export default {
  name: "ProjectInfo",
  components: {
    NavBar,
    TechBox,
    ResourceBox,
  },
  data() {
    return {
      techstack: [
        {
          id: 1,
          name: "Tech 1",
          description: "This is tech 1.",
          experience: "intermediate",
        },
        {
          id: 2,
          name: "Tech 2",
          description: "This is tech 2.",
          experience: "intermediate",
        },
        {
          id: 2,
          name: "Tech 2",
          description: "This is tech 2.",
          experience: "intermediate",
        },

        // add more projects as needed
      ],

      resources: [
        { id: 1, name: "resource 1", link: "https://www.mclaren.com/" },
        { id: 2, name: "resource 2", link: "https://www.mclaren.com/" },

        // add more projects as needed
      ],
    };
  },
  methods: {
    navigateToDash() {
      this.$router.push("/dash");
    },
  },
};
</script>

<style scoped>
.exit {
  position: absolute;
  left: 50;
  top: 20;
  margin-left: 20px;
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

.body {
  margin-top: 5%;
  text-align: left;
  margin-left: 5%;
}

.tech-scroll {
  display: flex;
  overflow-x: auto;
  gap: 20px; /* or any space you want between boxes */
}

.tech-box {
  flex: 0 0 auto;
}
</style>
