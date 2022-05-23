<template>
  <div>
    <div v-for="review in reviews" :key="review.pk" >
      <router-link :to="{ name: 'reviewDetail' , params : {'reviewPk' : review.pk} }">
        <div>
          {{ review.title}}
        </div>
      </router-link> 
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name : 'reviewList',
  props : {
    reviews : {
      type : Array,
    }
  },
  methods : {
    ...mapActions(['fetchReview'])
  }
}
</script>

<style>

</style>