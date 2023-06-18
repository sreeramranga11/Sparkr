<template>
  <div class="dash-page">
    <NavBar />
    <div class="grid">
      <div class="addBox" @click="navigateToCreate">
        <h1>+</h1>
      </div>

      <ProjectBox
        v-for="project in projects"
        :key="project.id"
        :projectName="project.name"
        :projectDescription="project.description"
      />

    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ProjectBox from "../components/ProjectBox.vue";

export default {
  name: "DashPage",
  components: {
    NavBar,
    ProjectBox,
  },
  data() {
    return {
      projects: [
        { id: 1, name: 'Project 1', description: 'This is project 1.' },
        { id: 2, name: 'Project 2', description: 'This is project 2.' },
        // add more projects as needed
      ],
    };
  },
  methods: {
    navigateToCreate() {
      this.$router.push("/create");
    },
  },
};
</script>

<style scoped>
/* Add any style you want for this DashPage */
.dash-page {
}

.addBox {
  height: 200px;
  width: 300px;
  background-color: #edf2fa;
  border-radius: 10px;
  border: 2px dotted black; /* adjust the border thickness (2px here) as needed */
  display: flex;
  align-items: center;
  justify-content: center;
}

.addBox:hover {
    cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>