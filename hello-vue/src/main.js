import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import store from './store/index'

import './icons/index' 

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
