import { App } from 'vue'
import {
  IconCopy,
  IconFile,
  IconInfoCircle,
  IconPlus,
  IconStop,
  IconThunderbolt
} from '@arco-design/web-vue/es/icon'

const icons = [IconFile, IconPlus, IconThunderbolt, IconStop, IconCopy, IconInfoCircle]

export function registerIcon(app: App) {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
