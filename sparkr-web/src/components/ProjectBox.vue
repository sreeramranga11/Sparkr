<template>
    <div class="box">
        <h2 class="project-title">{{ projectName }}</h2>
        <p class="project-description">{{ projectDescription }}</p>

    </div>
</template>

<script>
    export default {
        name: 'ProjectBox',
        props: {
            projectName: {
                type: String,
                required: true
            },
            projectDescription: {
                type: String,
                required: true
            },
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
