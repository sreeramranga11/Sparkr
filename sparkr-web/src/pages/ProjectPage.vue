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
          v-for="(tech, index) in techstack"
          :key="index"
          :techName="tech.Technology.trim()"
          :techDescription="tech.Description"
          :techExperience="tech.Experience"
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
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavBar from "../components/NavBar.vue";
import TechBox from "../components/TechBox.vue";
import ResourceBox from "../components/ResourceBox.vue";

export default {
  name: "ProjectPage",
  components: {
    NavBar,
    TechBox,
    ResourceBox,
  },
  setup() {
    const store = useStore();
    const techstack = computed(() => store.state.techStack);  // get the techstack from the store

    return {
      techstack,
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
