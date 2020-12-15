import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let allRouter = require('./routers')

let ROUTERS = allRouter.default

const router = new VueRouter({
  mode: 'history',
  routes: ROUTERS
})

export default router
