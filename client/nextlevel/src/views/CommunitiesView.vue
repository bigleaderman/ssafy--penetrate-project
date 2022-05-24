<template>
  <div id="communitybody">
    <div id="communities">
      <div id=community-nav-div>
        <community-nav></community-nav>
      </div>
      <div class="community-form">
        <br>
        <br>
        <review-list :reviews="selectedCategory"></review-list>
        <router-link :to="{ name: 'createReview' }"><button>글만들기</button></router-link> 
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
    ...mapGetters(['reviews', 'selectedCategory'])
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
#communitybody {
  background-color: rgb(53, 50, 50);
}

#communities {
  width: 100%;
  color: rgb(237, 237, 237);
}
.community-form {
  width: 75%;
  background-color: rgb(93, 91, 91);
  margin: 10px auto;
  border-radius: 10px;
}

#community-nav-div {
  width: 100vw;
  height: 180px;
  background-image: url("@/assets/backgroundnav.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}





</style>