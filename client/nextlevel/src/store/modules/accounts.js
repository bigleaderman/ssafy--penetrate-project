// import router from '@/router'
// import axios from 'axios'
// import drf from '@/api/drf'

// export default {
//   // namespaced: true,

//   state: {
//     token: '',
//     currentUser: {},
//     profile: {},
//     authError: null,
//   },

//   getters: {},
      
//   mutations: {},

//   actions: {
//     saveToken({ commit }, token) {
//       /* 
//       state.token 추가 
//       localStorage에 token 추가
//       */
//     },

//     removeToken({ commit }) {
//       /* 
//       state.token 삭제
//       localStorage에 token 추가
//       */
//     },

//     login({ commit, dispatch }, credentials) {
//       /* 
//       POST: 사용자 입력정보를 login URL로 보내기
//         성공하면
//           응답 토큰 저장
//           현재 사용자 정보 받기
//           메인 페이지(ArticleListView)로 이동
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     signup({ commit, dispatch }, credentials) {
//       /* 
//       POST: 사용자 입력정보를 signup URL로 보내기
//         성공하면
//           응답 토큰 저장
//           현재 사용자 정보 받기
//           메인 페이지(ArticleListView)로 이동
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     logout({ getters, dispatch }) {
//       /* 
//       POST: token을 logout URL로 보내기
//         성공하면
//           토큰 삭제
//           사용자 알람
//           LoginView로 이동
//         실패하면
//           에러 메시지 표시
//       */
//     },

//     fetchCurrentUser({ commit, getters, dispatch }) {
//       /*
//       GET: 사용자가 로그인 했다면(토큰이 있다면)
//         currentUserInfo URL로 요청보내기
//           성공하면
//             state.cuurentUser에 저장
//           실패하면(토큰이 잘못되었다면)
//             기존 토큰 삭제
//             LoginView로 이동
//       */
//     },

//     fetchProfile({ commit, getters }, { username }) {
//       /*
//       GET: profile URL로 요청보내기
//         성공하면
//           state.profile에 저장
//       */
//     },
//   },
// }
