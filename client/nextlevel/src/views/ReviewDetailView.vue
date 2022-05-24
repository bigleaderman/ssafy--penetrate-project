<template>
  <div class="community-form">
    <div id="title">
      <h1>제목 : {{ selectedReview.title }}</h1><br>
      <p>게시판 : {{ selectedReview.kind }}</p>
    </div>
    <div id="information" >
      <span>작성 : {{ selectedReview.created_at }} | 수정 : {{ selectedReview.created_at }}</span>
      <br>
      <p> 좋아요 : {{ selectedReview.like_count }} <button @click="likeReview(selectedReview.pk)">좋아요</button></p>
    </div>
    <hr>
    <div id="review-content">
      {{ selectedReview.content }}
      <br>
      <router-link :to="{name:'communities'}"><button>목록</button></router-link>
    </div>
    <div id="controlbox" v-if="isAuthor">
      <router-link :to="{name:'updateReview', params : {'reviewPk' : selectedReview.pk} }"><button>수정</button></router-link>
      <button @click.prevent="deleteReview(selectedReview.pk)">삭제</button>
    </div>
    <hr>
    <div>
      <comment-list :comments="selectedReview.comments"></comment-list>
    </div>
  </div>
</template>

<script>
import CommentList from '@/components/Community/CommentList.vue'
import { mapActions, mapGetters} from 'vuex'

export default {
  name : 'reviewDetail',
  components : {
    CommentList,
  },
  methods : {
    ...mapActions(['fetchReview', 'deleteReview','likeReview'])
  },

  computed : {
    ...mapGetters(['selectedReview', 'isAuthor'])
  },
  created() {
    this.fetchReview(this.$route.params.reviewPk)
  }
}
</script>

<style>

</style>