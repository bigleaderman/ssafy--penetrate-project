<template>
  <div id="communitybody">
    <div id="communities">
      <div>
        <community-nav></community-nav>
      </div>
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
import CommunityNav from '@/components/Community/CommunityNav.vue'
import { mapGetters, mapActions } from 'vuex'


export default {
  name : 'CommunitiesView',
  components : {
    ReviewList,
    CommunityNav,
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
  margin: auto;
  width: 100%;
  color: white;
  margin-top: 100px ;
  background-color: rgb(8, 8, 8);
}
.community-form {
  width: 90%;
  margin: auto;
}



</style>