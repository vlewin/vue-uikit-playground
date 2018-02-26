import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

import Dashboard from '@/components/Dashboard.vue'
import PageSpeed from '@/components/PageSpeed.vue'


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
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/speed',
      name: 'PageSpeed',
      component: PageSpeed
    },
  ]
})
