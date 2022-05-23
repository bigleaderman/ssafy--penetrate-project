import drf from '@/api/drf'
import axios from 'axios'
import router from '@/router'


// import _ from 'lodash'

export default {
  // namespaced: true,
  state: {
    reviews: [],
    selectedReview: {},
  },

  getters: {
    reviews (state){
      return state.reviews
    },
    selectedReview (state){
      return state.selectedReview
    },
    isReview (state) {
      return !!state.selectedReview
    }
  },

  mutations: {
    FETCHREVIEWS( state, reviews){
      state.reviews = reviews
    },
    FETCHREVIEW( state, review){
      state.selectedReview = review
    },
    SETCOMMENTS (state, comments){
      state.selectedReview.comments = comments
    }
  },

  actions: {
    fetchReviews({ commit, getters }) {
      axios({
        url : drf.communities.reviews(),
        method : 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('FETCHREVIEWS', res.data)
        })
        .catch(err =>{ // 에러페이지로 이동 구현
          console.log(err)
        })
    },

    fetchReview({ commit, getters }, reviewPk) {
      axios({
        url : drf.communities.review(reviewPk),
        method : 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res.data)
          commit('FETCHREVIEW', res.data)

        })
        .catch(err =>{ // 에러페이지로 이동 구현
          console.log(err)
        })

    },

    createReview({ commit, getters }, credentials) {
      axios({
        url : drf.communities.reviews(),
        method : 'post',
        data : credentials,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('FETCHREVIEW', res.data)
          // dispatch(this.fetchReview, paresInt(res.data.reviewPk))
          router.push({name : 'reviewDetail', params : {'reviewPk' : res.data.pk} })
        })
        .catch(err => {
          console.log(err)
        })
    },  

    updateReview({ commit, getters }, credentials ) {
      axios({
        url : drf.communities.review(credentials.pk),
        method : 'put',
        data : credentials,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('FETCHREVIEW', res.data)
          router.push({name : 'reviewDetail', params : {'reviewPk' : res.data.pk} })
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteReview({ commit, getters }, reviewPK) {
      if(confirm('정말 삭제하시겠습니까?')){
        axios({
          url : drf.communities.review(reviewPK),
          method : 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('FETCHREVIEW','')
            router.push({name: 'communities'})
          })
          .catch(err => {
            console.log(err)
          })
        }
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

    createComment({ commit,getters }, { reviewPk, content }) {
      const comment = { content }
      axios({
        url : drf.communities.commentCreate(reviewPk),
        method : 'post',
        data : comment,
        headers: getters.authHeader,
      })
        .then((res) => {
          commit('SETCOMMENTS', res.data) 
        })
        .catch(err => {
          console.log(err)
        })
    },

    updateComment({ commit, getters }, credentials) { //commentPk를 받아야함
      axios({
        url : drf.communities.commentChange(credentials.reviewPk, credentials.commentPk),
        method : 'put',
        data : credentials,
        headers: getters.authHeader,
      })
        .then((res) => {
          commit('SETCOMMENTS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteComment({ commit, getters },  credentials ) {
      axios({
        url : drf.communities.commentChange(credentials.reviewPk, credentials.commentPk),
        method : 'delete',
        data : {}, // 수정필요할 것 같은 부분
        headers: getters.authHeader,
      })
        .then((res) => {
          commit('SETCOMMENTS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
