<template>
  <div>
    <div class="container" id="box2">
      <div class="row">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="col-lg-2 col-md-3 col-sm-4 col-6"
        >
          <div style="width: 10rem" class="mb-3 mx-1">
            <img
              :class="{ red: isBind }"
              @click="setBind"
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              class="card-img-top"
              alt="..."
              height="250px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center py-5 grad" id="button-div">
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
#box2 {
  height: 100%;
  padding: 50px 5%;
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
  color: black;
  font: bold;
}
#select {
  height: 60px;
  width: 500px;
}
.grad {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgb(0, 0, 0)
  );
  position: fixed;
  top: 85%;
}
#button-div {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}
</style>