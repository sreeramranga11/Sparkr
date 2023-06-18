<template>
  <div class="box">
    <h2 class="project-title">{{ title }}</h2>
    <div class="project-description">
      <iframe
        :src="embedLink"
        width="15%"
        height="20%"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourceBox",
  props: ["title", "link"],
  computed: {
    embedLink() {
      return this.link.replace("watch?v=", "embed/");
    },
  },
};
</script>

<style scoped>
.box {
  height: 350px;
  width: 300px;
  background-color: #edf2fa;
  border-radius: 10px;
  border: 2px;
  text-align: left;
  box-sizing: border-box; /* to include padding in the box size */
}

.box:hover {
  cursor: pointer;
}

.project-title {
  margin-left: 5%;
}

.project-description {
  margin-left: 5%;
}
</style>
