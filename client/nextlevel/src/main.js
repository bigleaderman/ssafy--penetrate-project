import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
