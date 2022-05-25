<template>
  <div id="communitybody">
    <community-nav></community-nav>
    <div id="community-form">
      <div id="community-contents" style="padding:40px 30px; height : 600px;">
        <div id="title">
          <div>
            <div class="row">
              <div class="col col-2" style="height:10px">
                <span class="h3" style="background-color:yellow; height:8px !important;">{{setKind}}</span>
              </div>
              <h1 style="color : black" class="col">{{ selectedReview.title }}</h1>
            </div>
          </div>
        </div>
        <div id="information" >
          <span></span>
          <span>작성 : {{ selectedReview.created_at }} | 수정 : {{ selectedReview.created_at }}</span>
          <br>
          <p> 좋아요 : {{ selectedReview.like_count }} <button @click="likeReview(selectedReview.pk)">좋아요</button></p>
        </div>

        <div id="review-content">
          {{ selectedReview.content }}
          <br>
          <router-link :to="{name:'communities'}"><button>목록</button></router-link>
        </div>
        <div id="controlbox" v-if="isAuthor">
          <router-link :to="{name:'updateReview', params : {'reviewPk' : selectedReview.pk} }"><button>수정</button></router-link>
          <button @click.prevent="deleteReview(selectedReview.pk)">삭제</button>
        </div>
      </div>
      <hr>
      <div>
        <comment-list :comments="selectedReview.comments"></comment-list>
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from '@/components/Community/CommentList.vue'
import CommunityNav from '@/components/Community/CommunityNav.vue'
import { mapActions, mapGetters} from 'vuex'

export default {
  name : 'reviewDetail',
  components : {
    CommentList,
    CommunityNav,
  },
  data () {
    return {
      myKind : [
         "영화리뷰",
         "영화정보",
        "자유게시판"
      ]
    }
  },
  methods : {
    ...mapActions(['fetchReview', 'deleteReview','likeReview'])
  },

  computed : {
    ...mapGetters(['selectedReview', 'isAuthor']),
    setKind(){
      const num = this.selectedReview.kind
      return this.myKind.slice(num,num+1)[0]
    }
  },
  created() {
    this.fetchReview(this.$route.params.reviewPk)
  }
}
</script>

<style>

</style>