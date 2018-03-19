import Vuex from 'vuex'
import Vue from 'vue'
import {commonApi} from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    UUID: '',
    city: null,
    userInfo: null,
    wechatConfig: null, // 一般用做分享、调用api
    wechatUser: null, // openId，unionId
    tabBar: null
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUUID(state, UUID) {
      state.UUID = UUID
    },
    setCity(state, city) {
      state.city = city
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setWechatConfig(state, config) {
      state.wechatConfig = config
    },
    setWechatUser(state, user) {
      state.wechatUser = user
    },
    setTabBar(state, tabBar) {
      state.tabBar = tabBar
    }
  },
  actions: {
    getUserInfo({commit}) {
      commonApi.getUserInfo().then(res => {
        commit('setUserInfo', res.data)
      })
    }
  }
})
