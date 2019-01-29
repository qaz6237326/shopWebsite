import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userHome',
      name: 'userHome',
      component: () => import('@/views/user/home'),
      children: [
        {
          name: 'allOrder',
          path: 'allOrder',
          component: () => import('@/views/user/home/components/allOrder')
        },
        {
          name: 'waitPay',
          path: 'waitPay',
          component: () => import('@/views/user/home/components/waitPay')
        },
        {
          name: 'waitDelivery',
          path: 'waitDelivery',
          component: () => import('@/views/user/home/components/waitDelivery')
        },
        {
          name: 'waitReceiving',
          path: 'waitReceiving',
          component: () => import('@/views/user/home/components/waitReceiving')
        },
        {
          name: 'waitEvaluate',
          path: 'waitEvaluate',
          component: () => import('@/views/user/home/components/waitEvaluate')
        }
      ]
    }
  ]
})
