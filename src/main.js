import Vue from 'vue'
import App from './App.vue'
import UIkit from './libraries/uikit'
import router from './router'

import './assets/application.sass'



Object.defineProperty(Vue.prototype, '$uikit', { value: UIkit });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
