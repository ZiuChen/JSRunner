import { createRouter, createWebHashHistory } from 'vue-router'
import { EVENT_EDITOR_FOCUS } from '@/common/customEvent'

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

router.afterEach((to, from, failure) => {
  if (to.path === '/runner') {
    nextTick(() => window.dispatchEvent(EVENT_EDITOR_FOCUS))
  }
})

export default router
