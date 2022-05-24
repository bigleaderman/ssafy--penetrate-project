<template>
  <hooper 
  :vertical="true" 
  style="height: 200px" 
  :itemsToShow="3.5" 
  :infiniteScroll="true"
  :centerMode="true">
    <slide id="review-content" v-for="review in reviews" :key="review.pk">
    <p>{{ review.number }}이 영화 너무 재밌을것 같아요!</p>

    </slide>

  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name : 'MovieReivewList',
  props : {
    reviews : {
      type : Array,
    }
  },
  components: {
    Hooper,
    Slide
  },
}
</script>

<style>

</style>