import Home from '@/views/home'

export const routes = [
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
        component: () => import('@/views/user/home/children/allOrder')
      },
      {
        name: 'waitPay',
        path: 'waitPay',
        component: () => import('@/views/user/home/children/waitPay')
      },
      {
        name: 'waitDelivery',
        path: 'waitDelivery',
        component: () => import('@/views/user/home/children/waitDelivery')
      },
      {
        name: 'waitReceiving',
        path: 'waitReceiving',
        component: () => import('@/views/user/home/children/waitReceiving')
      },
      {
        name: 'waitEvaluate',
        path: 'waitEvaluate',
        component: () => import('@/views/user/home/children/waitEvaluate')
      }
    ]
  }
]
