<template>
  <div>
    <nav-bar></nav-bar>
    <h1>모달</h1>
    <main-carousel></main-carousel>
    <br />
    <br />
    <the-slider></the-slider>
    <modal-view v-if="isModalViewed" @close-modal="isModalViewed = false">
      <the-content></the-content>
    </modal-view>
    <button @click="isModalViewed = true">open modal</button>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TheContent from "./components/TheContent";
import ModalView from "./components/ModalView";
import TheSlider from "./components/TheSlider";
import MainCarousel from "./components/MainCarousel.vue";

export default {
  name: "app",

  components: {
    NavBar,
    TheContent,
    ModalView,
    TheSlider,
    MainCarousel,
  },
  data() {
    return {
      isModalViewed: false,
    };
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
