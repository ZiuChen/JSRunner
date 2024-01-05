import { Message } from '@arco-design/web-vue'
import { isElectron } from '@/utils'

export function registerCallback() {
  if (!isElectron) return

  if (utools.db.replicateStateFromCloud()) {
    Message.warning({
      content: '数据可能不完整，还在从云端复制中'
    })
  }
}
