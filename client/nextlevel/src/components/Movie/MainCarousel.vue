<template>
  <div>
    <hooper :autoPlay="true" :playSpeed="5000" style="height: 400px">
      <slide v-for="movie in movies" :key="movie.id" class="slide">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
      </slide>
    </hooper>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="http://joyposter.cafe24.com//NEW-posters/F600X848Poster/FMX-985.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://img.vogue.co.kr/vogue/2020/03/style_5e7da0efac0a5.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fcaster%2Fb37be6acd2ae4ba09ded7decb4ad3035.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div>
      <h1>메롱</h1>
    </div>
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