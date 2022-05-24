<template>
  <div>
    <form @submit.prevent="reviewSubmit">
      <label for="score">평점 : </label><input class="review-input" type="" id="score" v-model="number"><br>
      <label for="review">리뷰 : </label><input class="review-input" type="" id="review" v-model="review">
      <button>작성하기</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name : 'MovieReviewForm',
  data (){
    return {
      number : 0,
      review : '',
    }
  },
  props : {
    moviePk : Number,
  },
  methods : {
    ...mapActions(['setMovieScore']),
    reviewSubmit(){
      this.setMovieScore({moviePk : this.moviePk, number: this.number,})
      this.number = 0
    }
  }

}
</script>

<style>
#score {
  width: 50px !important;
}
#review {
  width: 300px !important;
}
</style>