import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import routes from './router/routes'
import '~/assets/style/common.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({mode: "history", routes})
const store = new Vuex.Store({})
new Vue({
  el: "#body",
  store,
  router,
  render: h => h(App)
})