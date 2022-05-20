<template>
  <div>
    <hooper :autoPlay="true" :playSpeed="5000" style="height: 400px">
      <slide v-for="movie in movies" :key="movie.id" class="slide">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
      </slide>
    </hooper>
    <div></div>
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