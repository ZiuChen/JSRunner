import { App } from 'vue'
import {
  IconCopy,
  IconFile,
  IconInfoCircle,
  IconPlus,
  IconStop,
  IconThunderbolt,
  IconSettings,
  IconCloseCircle,
  IconDown,
  IconEdit
} from '@arco-design/web-vue/es/icon'

const icons = [
  IconCopy,
  IconFile,
  IconInfoCircle,
  IconPlus,
  IconStop,
  IconThunderbolt,
  IconSettings,
  IconCloseCircle,
  IconDown,
  IconEdit
]

export function registerIcon(app: App) {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
