/**
 * Created by ebi on 2017/5/11.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) =>

export default router
