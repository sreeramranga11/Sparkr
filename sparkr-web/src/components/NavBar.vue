<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link to="/" class="nav-link">
          <h1 class="navtext">
              Logout
          </h1>
      </router-link>
      <!-- Add more links as needed -->
    </div>
    <router-link to="/dash" class="nav-link">
      <img src="../assets/logo.png" alt="Your Image" class="nav-image">
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 10px 20px;
}

.nav-links {
  display: flex;
}

.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

.nav-image {
  height: 50px;
  width: 50px;
}

.navtext {
    font-size: 30;
    color: red;
    font-weight: 100

}
</style>