import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
// import RecommendationView from '@/views/CommunitiesView.vue'

import CommunitiesView from '@/views/CommunitiesView.vue'

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
  // {
  //   path: '/recommendation',
  //   name: 'recommendation',
  //   component: RecommendationView
  // },
  {
    path: '/communities',
    name: 'communities',
    component: CommunitiesView
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
