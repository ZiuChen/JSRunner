import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
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
      path: '/setting',
      component: () => import('@/views/Setting.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    }
  ]
})

export default router
