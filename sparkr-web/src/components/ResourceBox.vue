<template>
    <div class="box">
        <h2 class="project-title">{{title}}</h2>
        <p class="project-description">
            <a href={{link}}>Click Here</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ResourceBox',
        props: {
            title: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
.box {
  height: 120px;
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
  margin-left: 5%
}

.project-description {
    margin-left: 5%;

}
</style>
