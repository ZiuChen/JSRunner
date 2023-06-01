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
  IconEdit,
  IconCommand,
  IconEye,
  IconDelete,
  IconShareAlt
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
  IconEdit,
  IconCommand,
  IconEye,
  IconDelete,
  IconShareAlt
]

export function registerIcon(app: App) {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
