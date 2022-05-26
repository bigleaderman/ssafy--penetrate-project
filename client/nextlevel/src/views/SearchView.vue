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

    <div class="container" id="box2">
      <div class="row">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="col-lg-2 col-md-3 col-sm-4 col-6"
        >
          <div style="width: 10rem" class="mb-3 mx-1">
            <img
              id="first-recom-img"
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              class="card-img-top"
              alt="..."
              height="250px"
            />
          </div>
        </div>
      </div>
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