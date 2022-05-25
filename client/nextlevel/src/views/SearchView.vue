<template>
  <div>
    <!-- 모달 -->
    <div id="black-bg" class="black-bg" v-if="isModalView" @click="deleteMovie">
      <div class="white-bg" onclick="event.stopImmediatePropagation()">
        <movie-detail></movie-detail>
      </div>
    </div>

    <!-- 모달 끝 -->

    <!-- 시작박스 -->
    <div class="row main-div">
      <div v-for="movie in SearchMovie" :key="movie.id" class="slide">
        <div class="slide-div" @click="getDetail(movie)">
          <div
            id="test"
            style="cursor: pointer"
            :style="{
              'background-image': `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
            }"
          >
            <div id="main-sub">
              <div class="main-title">
                <h1>{{ movie.title }}</h1>
                <br />
                <span id="main-overview"> {{ movie.overview }} </span>
                <hr />
                <button
                  id="detail-button"
                  class="btn btn-outline-warning"
                  @click="getDetail(movie)"
                >
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 메인캐러셀시작 -->
      <!-- <span class="h1">메인캐러샐</span> -->

      <main-carousel :movies="mainCarouselMovie"></main-carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SearchView",

  methods: {
    ...mapActions(["getMovies", "deleteMovie", "fetchCurrentUser"]),
  },

  created() {
    this.getMovies();
  },

  computed: {
    ...mapGetters(["SearchMovie", "isModalView", "currentUser"]),
  },
};
</script>

<style>
</style>