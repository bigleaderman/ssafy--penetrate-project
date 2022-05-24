// import router from '@/router'
import drf from '@/api/drf'
import axios from 'axios'

// import _ from 'lodash'

// const API_KEY = '5e8f5d1235d0a3c13fdd637e53ff9c56'
// const API_URL = 'https://api.themoviedb.org/3/movie/popular?'
// 모달안나올시 바꾸기
// const API_KEY_YOU = 'AIzaSyD7y62yDxCe7Sy86zArwOyvSDfQr8ba8f4'
// const API_KEY_YOU = 'AIzaSyBliR49ASudZ4nr9LHDc9U7IKb9aBnSXVA'
const API_KEY_YOU = 'AIzaSyCVHmCCeL7luFGStLcnlaiDYXj1JKHktTM'
const API_URL_YOU = 'https://www.googleapis.com/youtube/v3/search'

export default {
  // namespaced: true,
  state: {
    movies: [],
    moviedetail: null,
    movievideo: ''
  },
  getters: {
    recCarouselMovie(state) {
      return state.movies.filter((movie, idx) => {
        if (idx < 30) {
          return movie
        }
      })
    },
    mainCarouselMovie(state) {
      return state.movies.filter((movie, idx) => {
        if (idx < 10) {
          return movie
        }
      })
    },
    SubCarouselMovie(state) {
      return state.movies.filter((movie, idx) => {
        if (10 <= idx && idx < 20) {
          return movie
        }
      })
    },
    SubCarouselMovie2(state) {
      return state.movies.filter((movie, idx) => {
        if (20 <= idx && idx < 30) {
          return movie
        }
      })
    },
    SubCarouselMovie3(state) {
      return state.movies.filter((movie, idx) => {
        if (30 <= idx && idx < 40) {
          return movie
        }
      })
    },
    SubCarouselMovie4(state) {
      return state.movies.filter((movie, idx) => {
        if (40 <= idx && idx < 50) {
          return movie
        }
      })
    },
    moviedetail(state) {
      return state.moviedetail
    },
    isModalView(state) {
      return !!state.moviedetail
    },
    getMovieVideo(state) {
      if (state.movievideo) return `https://www.youtube.com/embed/${state.movievideo}`
    },
    getMovieReview(state) {
      if (state.moviedetail) return state.moviedetail.scores
    }
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    GET_MOVIE_DETAIL(state, movie) {
      state.moviedetail = movie
    },
    DELETE_DETAIL(state) {
      state.moviedetail = null
    },
    SET_MOVIE_VIDEO(state, video) {
      state.movievideo = video
    },
    PUSH_MOVIE_REVIEW(state, review) {
      state.moviedetail.scores.push(review)
    }
  },

  actions: {
    getMovies({ commit, getters }) {
      axios({
        url: drf.movies.home(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('GET_MOVIES', res.data)
        })
        .catch(err => {
          console.error(err.response.data)
        })
    },
    getDetail({ commit }, movie) {
      const params = {
        key: API_KEY_YOU,
        part: 'snippet',
        Type: 'video',
        q: movie.title + '메인예고편',
      }
      axios({
        method: 'get',
        url: API_URL_YOU,
        params
      })
        .then(res => {
          commit('GET_MOVIE_DETAIL', movie)
          commit('SET_MOVIE_VIDEO', res.data.items[0].id.videoId)
        })
    },
    deleteMovie({ commit }, event) {
      event.stopPropagation()
      commit('DELETE_DETAIL')
    },
    setMovieScore({ commit, getters}, {moviePk, number}){
      axios({
        url: drf.movies.createReview(moviePk),
        method: 'post',
        data : {
          number
        },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('PUSH_MOVIE_REVIEW', res.data[0])
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
}
