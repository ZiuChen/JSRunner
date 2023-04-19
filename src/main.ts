import { createApp } from 'vue'
import '@/style/index.less'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { registerIcon } from '@/common/registerIcon'
import { registerCallback } from '@/common/registerCallback'
import { isElectron, SERVER_DEV } from './utils'

try {
  if (!SERVER_DEV && !isElectron) throw new Error('unsupported platform') // 禁用非 electron 环境的运行
  if (!SERVER_DEV && utools.isDev()) throw Error('unsupported enviroment') // 禁用非热更新服务器的开发模式的运行 防止逆向

  createApp(App).use(router).use(createPinia()).use(registerIcon).mount('#app')

  registerCallback()
} catch (error) {
  console.error(error)
  if (isElectron) utools.showNotification('初始化失败: ' + error)
}
