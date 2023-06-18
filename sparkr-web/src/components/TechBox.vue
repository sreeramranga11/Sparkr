<template>
    <div class="box">
        <h2 class="project-title">{{ techName }}</h2>
        <p class="project-description">{{ techDescription }}</p>
        <p class="project-description">Experience: {{ techExperience }}</p>

    </div>
</template>

<script>
    export default {
        name: 'TechBox',
        props: {
            techName: {
                type: String,
                required: true
            },
            techDescription: {
                type: String,
                required: true
            },
            techExperience: {
                type: String,
                required: true
            },
        },

        mounted() {
    console.log(this.techName, this.techDescription, this.techExperience);
}

    }
</script>

<style scoped>
.box {
  height: 200px;
  width: 300px;
  background-color: #edf2fa;
  border-radius: 10px;
  border: 2px;
  display: flex;
  flex-direction: column; /* to align items vertically */
  justify-content: center;
  padding: 20px;
  box-sizing: border-box; /* to include padding in the box size */

}

.box:hover {
    cursor: pointer;
}

.project-title {
  margin-bottom: 10px; /* space between the title and the description */
  text-align: center;
}

.project-description {
  text-align: center;
}
</style>
