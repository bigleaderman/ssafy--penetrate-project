<template>
  <div>
    <form @submit.prevent="reviewSubmit">
      <div class="star-rating space-x-4 mx-auto">
        <input
          type="radio"
          id="5-stars"
          name="rating"
          value="5"
          v-model="ratings"
        />
        <label for="5-stars" class="star pr-4">★</label>
        <input
          type="radio"
          id="4-stars"
          name="rating"
          value="4"
          v-model="ratings"
        />
        <label for="4-stars" class="star">★</label>
        <input
          type="radio"
          id="3-stars"
          name="rating"
          value="3"
          v-model="ratings"
        />
        <label for="3-stars" class="star">★</label>
        <input
          type="radio"
          id="2-stars"
          name="rating"
          value="2"
          v-model="ratings"
        />
        <label for="2-stars" class="star">★</label>
        <input
          type="radio"
          id="1-star"
          name="rating"
          value="1"
          v-model="ratings"
        />
        <label for="1-star" class="star">★</label>
      </div>
      <label for="score">평점 : </label
      ><input class="review-input" type="" id="score" v-model="number" /><br />
      <label for="review">리뷰 : </label
      ><input class="review-input" type="" id="review" v-model="content" />
      <button>작성하기</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MovieReviewForm",
  data() {
    return {
      number: 0,
      content: "",
    };
  },
  props: {
    moviePk: Number,
  },
  methods: {
    ...mapActions(["setMovieScore"]),
    reviewSubmit() {
      this.setMovieScore({
        moviePk: this.moviePk,
        number: this.number,
        content: this.content,
      });
      this.number = 0;
    },
  },
};
</script>

<style>
#score {
  width: 50px !important;
}
#review {
  width: 300px !important;
}
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}

.star-rating input {
  display: none;
}

.star-rating label {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}

.star-rating :checked ~ label {
  -webkit-text-fill-color: gold;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: #fff58c;
}
</style>