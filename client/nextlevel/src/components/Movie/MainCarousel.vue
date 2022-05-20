<template>
  <div>
    <hooper :autoPlay="true" :playSpeed="5000" style="height: 400px">
      <slide v-for="movie in movies" :key="movie.id" class="slide">
        <div class="slide-div"  @click="getDetail(movie)">
          <img width="100%" height="600px" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "MainCarousel",
  props: {
    movies: {
      type: Array,
    },
  },
  components: { Hooper, Slide },
};
</script>

<style>
#img {
  height: 300px;
}
</style>