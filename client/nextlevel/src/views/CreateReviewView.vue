<template>
  <div id="communitybody">
    <community-nav></community-nav>
    <div id="community-form">
      <review-form :review="setCredential" action="create"></review-form>
    </div>
  </div>
</template>

<script>
import ReviewForm from '@/components/Community/ReviewForm.vue'
import CommunityNav from '@/components/Community/CommunityNav.vue'
import {mapGetters} from 'vuex'
export default {
  name : "createReview",
  data() {
    return {
      credentials : {
        title : "",
        content : "",
      },
    }
  },
  computed : {
    ...mapGetters(['nowCategory']),
    setCredential(){
      return {
        ...this.credentials,
        kind : this.nowCategory
      }
    }
  },
  components : {
    ReviewForm,
    CommunityNav,
  }
}
</script>

<style>
  #communitybody {
    background-color: rgb(150, 150, 150);
  }
  .community-form {
    width: 60%;
    margin: 30px auto;
    border-radius: 10px;
  }
</style>