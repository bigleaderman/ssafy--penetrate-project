<template>
  <div id="detail">
    <div id="please-row" class="row" style="height: 100%">
      <div
        id="please-row-2"
        class="col col-12 col-xxl-5 order-xxl-2"
        stlye="height:100%"
      ></div>

      <div id="please-row-2" class="col col-12 col-xxl-7">
        <div
          id="contentbox"
          :style="{
            'background-image': `url('http://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RecommendationForm",
  props: {
    movies: {
      type: String,
    },
  },
  methods: {
    ...mapActions(["getMovies", "fetchCurrentUser"]),
  },

  created() {
    this.getMovies();
  },
};
</script>

<style>
#test {
  height: 600px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#main-sub {
  padding: 200px 50px;
  height: 100px;
  width: 500px;
}

#main-overview {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>