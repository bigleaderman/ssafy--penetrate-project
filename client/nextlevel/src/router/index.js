import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import RecommendationView from '@/views/RecommendationView.vue'

import CommunitiesView from '@/views/CommunitiesView.vue'
import CreateReviewView from '@/views/CreateReviewView.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'
import UpdateReviewView from '@/views/UpdateReviewView.vue'

import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import SignupView from '@/views/SignupView.vue'
import NotFound404 from '@/views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recommendation',
    name: 'recommendation',
    component: RecommendationView
  },
  {
    path: '/communities',
    name: 'communities',
    component: CommunitiesView
  },
  {
    path: '/communities/create',
    name: 'createReview',
    component: CreateReviewView
  },
  {
    path: '/communities/:reviewPk/update',
    name: 'updateReview',
    component: UpdateReviewView
  },
  {
    path: '/communities/:reviewPk',
    name: 'reviewDetail',
    component: ReviewDetailView
  },




  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  store.commit('SET_AUTH_ERROR', null)
  const { isLoggedIn } = store.getters
  const noAuthPages = ['login', 'signup',]
  const isAuthRequired = !noAuthPages.includes(to.name)
  if (isAuthRequired && !isLoggedIn) {
    alert('로그인이 필요합니다.')
    next({ name: 'login' })
  } else {
    next()
  }
  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'home ' })
  }
})

export default router
