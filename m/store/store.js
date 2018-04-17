import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setMobile(state, mobile) {
      state.mobile = mobile
    }
  },
  actions: {}
})
