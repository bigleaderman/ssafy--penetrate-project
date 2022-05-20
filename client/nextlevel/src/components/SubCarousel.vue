<template>
  <div id="app3">
    <hooper
      :settings="hooperSettings"
      :centerMode="true"
      pagination="no"
      :infiniteScroll="true"
    >
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <slide>
        <div class="slide-div">슬라이드</div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>

import "hooper/dist/hooper.css";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 4,
          },
          1000: {
            itemsToShow: 5,
            pagination: "fraction",
          },
        },
      },
    };
  },
};
</script>

<style>
#app3 {
  background-color: gray;
  display: flex;
  align-items: center;
}

.slide-div {
  background-color: aqua;
  margin: 5px;
}
</style>
