<template>
  <div class="please">
    -
    -
    -
    -
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MovieDetail from "@/components/MovieDetail.vue";

export default {
  name: "app",

  components: {
    NavBar,
    MovieDetail,
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
