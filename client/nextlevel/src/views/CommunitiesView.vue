<template>
  <div>
    <div id="communities">
      <div class="community-form">
        <br>
        <router-link :to="{ name: 'createReview' }"><button>글만들기</button></router-link> 
        <hr>
        
        <review-list :reviews="reviews"></review-list>

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
  width: 100wh;
  background-color:rgba(45, 45, 45, 45);
  color: white;
  margin-top: 100px ;
}
    
    
.community-form {
  width: 1200px;
  margin: auto;
  height: 59vh;
}


</style>