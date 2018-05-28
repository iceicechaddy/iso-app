import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Callback from '../components/Callback'
import ActionsSelect from '../components/settings/ActionsSelect'
import Settings from '../components/settings/Settings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/settings/actions',
      name: 'ActionsSelect',
      component: ActionsSelect
    }
  ]
})

export default router
