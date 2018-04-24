import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

new Vue({
  el: '#body',
  store,
  router,
  render: h => h(App)
})