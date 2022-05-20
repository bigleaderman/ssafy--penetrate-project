<template>
  <div>
    <nav-bar></nav-bar>
    <h1>모달</h1>
    <br />
    <br />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",

  components: {
    NavBar
  },
};
</script>


<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
