import Vue from 'vue'
import Router from 'vue-router'

import Dashbaord from '@/components/Dashbaord.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'uk-active',
  routes: [

    {
      path: '/',
      name: 'SignIn',
      alias: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'Dashbaord',
      component: Dashbaord
    },
  ]
})
