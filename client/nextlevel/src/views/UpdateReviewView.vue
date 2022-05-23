<template>
  <div>
    <h1>Edit Review</h1>
    <review-form v-if="isReview" :review="selectedReview" action="update"></review-form>
  </div>
</template>

<script>

import ReviewForm from '@/components/Community/ReviewForm.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name : "createReview",
  components : {
    ReviewForm,
  },
  computed : {
    ...mapGetters(['selectedReview', 'isReview',])
  },
  methods : {
    ...mapActions(['fetchReview'])
  },
  created() {
    this.fetchReview(this.$route.params.reviewPk)
  }
}
</script>

<style>

</style>