import drf from '@/api/drf'
import axios from 'axios'
import router from '@/router'

// import _ from 'lodash'

export default {
  // namespaced: true,
  state: {
    reviews: [],
    review: null,
    reviewComments : [],
  },

  getters: {},

  mutations: {
    FETCHREVIEWS( state, reviews){
      state.reviews = reviews
    },
    FETCHREVIEW( state, review){
      state.reviewComments = review.review
      state.reviews = review
    },
    PUSHREVIEW( state, review){
      state.reviews.push(review)
    },
    DELETEREVIEW( state ){
      state.reviewComments = {}
      state.review = null
    },
    PUSHREVIEWCOMMENT(state, comment){
      state.reviewComments.push(comment)
    },
    UPDATECOMMENT(state, commentPk, content) {
      state.reviewComments = state.reviewComments.map(comment => {
        if (comment.pk === commentPk) {
          comment.content = content
          return comment
        } else {
          comment
        }
      })
    },
    DELETECOMMENT(state, commentPk){
      const num = state.reviewComments.indexof(commentPk)
      state.reviewComments.slice(num,1)
    }
  },

  actions: {
    fetchReviews({ commit }) {
      axios({
        url : drf.communities.reviews(),
        method : 'get',
      })
        .then(res => {
          commit('FETCHREVIEWS', res.data)
        })
        .catch(err =>{ // 에러페이지로 이동 구현
          console.log(err)
        })
    },

    fetchReview({ commit }, reviewPk) {
      axios({
        url : drf.communities.review(reviewPk),
        method : 'get',
      })
        .then(res => {
          commit('FETCHREVIEW', res.data)
          router.push({naame : 'review'})
        })
        .catch(err =>{ // 에러페이지로 이동 구현
          console.log(err)
        })

    },

    createArticle({ commit, dispatch }, credentials) {
      axios({
        url : drf.communities.review(),
        method : 'post',
        data : credentials,
      })
        .then(res => {
          commit('PUSHREVIEW', res.data)
          dispatch(this.fetchReview, res.data.reviewPk)
        })
        .catch(err => {
          console.log(err)
        })
    },  

    updateArticle({ commit }, credentials ) {
      axios({
        url : drf.communities.review(),
        method : 'put',
        data : credentials,
      })
        .then(res => {
          commit('FETCHREVIEW', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteArticle({ commit }, reviewPK) {
      axios({
        url : drf.communities.review(reviewPK),
        method : 'delete',
      })
        .then(() => {
          commit('DELETEREVIEW')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // likeArticle({ commit, getters }) {
    //   /* 좋아요
    //   POST: likeArticle URL(token)
    //     성공하면
    //       state.article 갱신
    //     실패하면
    //       에러 메시지 표시
    //   */
    // },

    createComment({ commit }, { articePk, credentials }) {
      axios({
        url : drf.communities.commentCreate(articePk),
        method : 'post',
        data : credentials,
      })
        .then(res => {
          commit('PUSHREVIEWCOMMENT',res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    updateComment({ commit }, credentials) { //commentPk를 받아야함
      axios({
        url : drf.communities.commentChange(credentials.article_pk, credentials.comment_pk),
        method : 'put',
        data : credentials, // 수정필요할 것 같은 부분
      })
        .then(() => {
          const data = {
            articlePk : credentials.article_pk,
            commentPk : credentials.comment_pk,
          }
          commit('CHANGECOMMENT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteComment({ commit },  credentials ) {
      axios({
        url : drf.communities.commentChange(credentials.article_pk, credentials.comment_pk),
        method : 'put',
        data : credentials, // 수정필요할 것 같은 부분
      })
        .then(() => {
          commit('DELETECOMMENT',credentials.comment_pk)
        })
    },
  },
}
