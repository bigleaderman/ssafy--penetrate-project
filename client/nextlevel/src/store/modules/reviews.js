// import axios from 'axios'
// import router from '@/router'
// import drf from '@/api/drf'

// import _ from 'lodash'

// export default {
//   // namespaced: true,
//   state: {
//     articles: [],
//     article: {},
//   },

//   getters: {},

//   mutations: {},

//   actions: {
//     fetchArticles({ commit, getters }) {
//       /* 게시글 목록 받아오기
//       GET: articles URL (token)
//         성공하면
//           응답으로 받은 게시글들을 state.articles에 저장
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     fetchArticle({ commit, getters }) {
//       /* 단일 게시글 받아오기
//       GET: article URL (token)
//         성공하면
//           응답으로 받은 게시글들을 state.articles에 저장
//         실패하면
//           단순 에러일 때는
//             에러 메시지 표시
//           404 에러일 때는
//             NotFound404 로 이동
//       */
//     },

//     createArticle({ commit, getters }) {
//       /* 게시글 생성
//       POST: articles URL (게시글 입력정보, token)
//         성공하면
//           응답으로 받은 게시글을 state.article에 저장
//           ArticleDetailView 로 이동
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     updateArticle({ commit, getters }) {
//       /* 게시글 수정
//       PUT: article URL (게시글 입력정보, token)
//         성공하면
//           응답으로 받은 게시글을 state.article에 저장
//           ArticleDetailView 로 이동
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     deleteArticle({ commit, getters }) {
//       /* 게시글 삭제
//       사용자가 확인을 받고
//         DELETE: article URL (token)
//           성공하면
//             state.article 비우기
//             AritcleListView로 이동
//           실패하면
//             에러 메시지 표시

//       */
//     },

//     likeArticle({ commit, getters }) {
//       /* 좋아요
//       POST: likeArticle URL(token)
//         성공하면
//           state.article 갱신
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     createComment({ commit, getters }) {
//       /* 댓글 생성
//       POST: comments URL(댓글 입력 정보, token)
//         성공하면
//           응답으로 state.article의 comments 갱신
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     updateComment({ commit, getters }, { articlePk, commentPk, content }) {
//       /* 댓글 수정
//       PUT: comment URL(댓글 입력 정보, token)
//         성공하면
//           응답으로 state.article의 comments 갱신
//         실패하면
//           에러 메시지 표시
      
//       */
//     },

//     deleteComment({ commit, getters }, { articlePk, commentPk }) {
//       /* 댓글 삭제
//       사용자가 확인을 받고
//         DELETE: comment URL (token)
//           성공하면
//             응답으로 state.article의 comments 갱신
//           실패하면
//             에러 메시지 표시
//       */
//     },
//   },
// }
