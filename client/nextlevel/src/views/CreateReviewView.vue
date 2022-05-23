<template>
  <div>
    <h1>New Review</h1>
    <review-form :review="credentials" action="create"></review-form>
  </div>
</template>

<script>

import ReviewForm from '@/components/Community/ReviewForm.vue'

export default {
  name : "createReview",
  data() {
    return {
      credentials : {
        title : "",
        content : "",
        movie_title : "",
        score : 0,
      },
    }
  },

  components : {
    ReviewForm
  }
}
</script>

<style>

</style>