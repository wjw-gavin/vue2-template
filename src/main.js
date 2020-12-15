import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

//注册全局常用方法
import * as global from '@/utils/global'
Object.keys(global).forEach(item => {
  Vue.prototype[item] = global[item]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
