<template>
  <div>
    <div id="communities">
      <div class="community-form">
        <review-list :reviews="reviews"></review-list>

        <router-link :to="{ name: 'createReview' }"><button>글만들기</button></router-link> 

      </div>
    </div>
  </div>
</template>

<script>
import ReviewList from '@/components/Community/ReviewList.vue'
import { mapGetters, mapActions } from 'vuex'


export default {
  name : 'CommunitiesView',
  components : {
    ReviewList,
  },
  computed : {
    ...mapGetters(['reviews'])
  },
  methods : {
    ...mapActions(['fetchReviews'])
  },
  created() {
    this.fetchReviews()
  }
}
</script>

<style>
#communities {
  padding: 10% 0%;
}



</style>