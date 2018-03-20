import Vuex from 'vuex'
import Vue from 'vue'
import {mobileDevice} from '../assets/js/base'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobile: mobileDevice,
    token: '',
  },
  mutations: {
    setToken(token) {
      state.token = token
    }
  },
  actions: {}
})
