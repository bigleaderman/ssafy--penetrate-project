<template>
  <div class="community-form">
    <div id="title">
      <h1>제목 : {{ selectedReview.title }}</h1><br>
      <h2>영화 : {{ selectedReview.movie_title }} </h2>
    </div>
    <div id="information">
      <span>작성 : {{ selectedReview.created_at }} | 수정 : {{ selectedReview.created_at }}</span>
      <br>
      <p> 좋아요 : {{ selectedReview.like_count }}</p><hr>
    </div>
    <div id="review-content">
      {{ selectedReview.content }}
      <br>
      <router-link :to="{name:'communities'}"><button>목록</button></router-link>
    </div>
    <div id="controlbox">
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
    ...mapActions(['fetchReview', 'deleteReview'])
  },

  computed : {
    ...mapGetters(['selectedReview'])
  },
  created() {
    this.fetchReview(this.$route.params.reviewPk)
  }
}
</script>

<style>

</style>