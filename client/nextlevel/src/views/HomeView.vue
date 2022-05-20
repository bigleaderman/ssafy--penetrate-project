<template>
  <div class="home">
    <!-- 시작박스 -->
    <div class="row">
      <!-- 메인캐러셀시작 -->
      <div id="temp1">
        <h1>메인캐러샐</h1>
        <main-carousel :movies="mainCarouselMovie"></main-carousel>
      </div>
    </div>
    <!-- 메인캐러셀끝 -->

    <div class="row sub-div">
      <!-- 서브 캐러셀 -->
      <sub-carousel :movies="SubCarouselMovie"></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel :movies="SubCarouselMovie2"></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel :movies="SubCarouselMovie3"></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel :movies="SubCarouselMovie4"></sub-carousel>
    </div>
    <div class="row sub-div">
      <sub-carousel :movies="SubCarouselMovie5"></sub-carousel>
    </div>
    <!-- 부분캐러셀끝 -->

    <div>
      <!-- 모달 -->
    </div>
  </div>
  <!-- 시작박스끝 -->
</template>

<script>
import MainCarousel from "@/components/Movie/MainCarousel.vue";
import SubCarousel from "@/components/Movie/SubCarousel.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    MainCarousel,
    SubCarousel,
  },

  methods: {
    ...mapActions(["getmovies"]),
  },

  created() {
    this.getmovies();
  },

  computed: {
    ...mapGetters(["mainCarouselMovie"]),
    ...mapGetters(["SubCarouselMovie"]),
    ...mapGetters(["SubCarouselMovie2"]),
    ...mapGetters(["SubCarouselMovie3"]),
    ...mapGetters(["SubCarouselMovie4"]),
    ...mapGetters(["SubCarouselMovie5"]),
  },
};
</script>

<style scoped>
#temp1 {
  background-color: rgb(79, 35, 35);
  border: 1px solid rgb(205, 158, 153);
  height: 200px;
  margin: 10px 0px;
}

.sub-div {
  margin: 60px 0px;
  height: 300px !important;
}
</style>