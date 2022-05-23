<template>
  <div class="container py-5" id="modalbox2">
    <div class="row">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="col-lg-3 col-md-4 col-sm-6 col-12"
      >
        <div style="width: 15rem" class="mb-3">
          <img
            :class="{ red: isBind }"
            @click="setBind"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            class="card-img-top"
            alt="..."
            height="365px"
          />
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center py-5">
      <button class="row btn btn-warning" id="select">
        <a href="http://localhost:8080/recommendation/movie" class="h3"
          >선택완료</a
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationForm",
  props: {
    movies: {
      type: Array,
    },
  },
  data() {
    return {
      isBind: false,
    };
  },
  methods: {
    setBind() {
      this.isBind = !this.isBind;
    },
  },
};
</script>

<style>
#modalbox2 {
  height: 100%;
  padding: 8% 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.card {
  margin: 20px;
}
.red {
  opacity: 0.5;
}
a {
  text-decoration: none;
  color: white;
}
#select {
  height: 60px;
  width: 500px;
  /* position: fixed;
  top: 85%; */
}
</style>