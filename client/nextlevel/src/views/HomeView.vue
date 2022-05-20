<template>
  <div class="home">
    <!-- 모달 -->
    <div class="black-bg" v-if="isModalView" @click="deleteMovie">
      <div class="white-bg" onclick="event.stopImmediatePropagation()">
          <movie-detail></movie-detail>
      </div>
    </div>


    <!-- 모달 끝 -->

    <!-- 시작박스 -->
    <div class="row">
      <!-- 메인캐러셀시작 -->
      <h1>메인캐러샐</h1>
      <main-carousel :movies="mainCarouselMovie"></main-carousel>
    </div>
    <!-- 메인캐러셀끝 -->
    <div class="row sub-div">
      <!-- 서브 캐러셀 -->
      <span class="h1 my-text">서브캐러샐</span>
      <sub-carousel :movies="SubCarouselMovie"></sub-carousel>
    </div>
    <div class="row sub-div">
      <span class="h1 my-text">서브캐러샐</span>
      <sub-carousel :movies="SubCarouselMovie2"></sub-carousel>
    </div>
    <div class="row sub-div">
      <span class="h1 my-text">서브캐러샐</span>
      <sub-carousel :movies="SubCarouselMovie3"></sub-carousel>
    </div>
    <div class="row sub-div">
      <span class="h1 my-text">서브캐러샐</span>
      <sub-carousel :movies="SubCarouselMovie4"></sub-carousel>
    </div>
    <!-- 부분캐러셀끝 -->

  </div>
  <!-- 시작박스끝 -->
</template>

<script>
import MainCarousel from "@/components/Movie/MainCarousel.vue";
import SubCarousel from "@/components/Movie/SubCarousel.vue";
import MovieDetail from "@/components/Movie/MovieDetail.vue";
// import ModalView from "@/components/Movie/ModalView.vue";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "HomeView",
  components: {
    MainCarousel,
    SubCarousel,
    MovieDetail,
    // ModalView,
  },

  methods: {
    ...mapActions(["getMovies","deleteMovie"]),
  },

  created() {
    this.getMovies();
  },

  computed: {
    ...mapGetters(["mainCarouselMovie","SubCarouselMovie","SubCarouselMovie2",
      "SubCarouselMovie3", "SubCarouselMovie4", "isModalView"
    ]),
  },
};
</script>

<style>
.sub-div {
  margin: 100px 0px;
  height: 450px !important;
  color : white !important;
}
/* 모달창 */
.my-modal{
  box-sizing: border-box;
  background-color: red;
}
.black-bg {
  width : 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position : fixed ;
  padding: 100px 0px 300px;
  z-index: 10;
  
}
.white-bg {
  width: 100%;

  background : white;
  padding: 0px;
  z-index: 20;
  margin: auto;
}
</style>