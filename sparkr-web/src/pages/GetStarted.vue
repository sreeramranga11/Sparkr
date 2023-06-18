<template>
  <div class="get-started">
    <h1 class="text">Welcome to Sparkr</h1>
    <LoginButton/>
    <!-- You can put more content here -->
  </div>
</template>


<script>
import LoginButton from '../components/LoginButton.vue'

export default {
  name: 'GetStarted',
  components: {
      LoginButton
  }
}
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden; /* This will disable the scrollbar */
}

.get-started {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url('../assets/getStarted.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.text {
    margin-top: 12%;
    font-size: 75px;
    font-weight: 'bold';
    color: #D34644;
}

</style>

