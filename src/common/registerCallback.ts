import { Message } from '@arco-design/web-vue'
import { EVENT_ON_PLUGIN_ENTER } from '@/common/customEvent'
import { isElectron } from '@/utils'

export function registerCallback() {
  if (!isElectron) return

  utools.onPluginEnter(({ code, type, payload }) => {
    window.dispatchEvent(EVENT_ON_PLUGIN_ENTER)
  })

  if (utools.db.replicateStateFromCloud()) {
    Message.warning({
      content: '数据可能不完整，还在从云端复制中'
    })
  }
}
