import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/runner'
    },
    {
      path: '/runner',
      component: () => import('@/views/Runner.vue')
    },
    {
      path: '/scripts',
      component: () => import('@/views/Scripts.vue')
    },
    {
      path: '/setting',
      component: () => import('@/views/Setting.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    }
  ]
})
