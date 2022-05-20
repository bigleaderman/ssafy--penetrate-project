import axios from 'axios'
// import router from '@/router'
// import drf from '@/api/npdrf'

// import _ from 'lodash'

const API_KEY = '5e8f5d1235d0a3c13fdd637e53ff9c56'
const API_URL = 'https://api.themoviedb.org/3/movie/popular?'

export default {
  // namespaced: true,
  state: {
    movies : {}
  },
  getters: {
    mainCarousel(state){
      return state.movies.filter( (movie, idx) => {
        if (idx < 5) {
          return movie
        }
      })
    },
    
  
  },

  mutations: {
    GET_MOVIES(state, movies){
      state.movies = movies
      console.log(movies)
    }
  },

  actions: {
    getmovies( {commit} ){
      const params = {
        api_key : API_KEY,
        language : 'ko-KR',
        page : 1
      }
      axios({
        methods : 'get',
        url : API_URL,
        params,
      })
        .then(res => {
          commit('GET_MOVIES', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
}