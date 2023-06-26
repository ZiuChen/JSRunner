import { createApp } from 'vue'
import '@/style/index.less'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { registerDirectives } from '@/common/directives'
import { registerIcon } from '@/common/registerIcon'
import { registerCallback } from '@/common/registerCallback'
import { isElectron, SERVER_DEV } from './utils'

try {
  createApp(App)
    .use(router)
    .use(createPinia())
    .use(registerDirectives)
    .use(registerIcon)
    .mount('#app')

  registerCallback()
} catch (error) {
  console.error(error)
  if (isElectron) utools.showNotification('初始化失败: ' + error)
}
