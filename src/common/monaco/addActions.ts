import type { defineEmits } from 'vue'
import { monaco } from '@/common/monaco'

export function addActions(
  editor: monaco.editor.IStandaloneCodeEditor,
  emit: ReturnType<typeof defineEmits>
) {
  editor.addAction({
    id: 'run', // 菜单项 id
    label: 'Run', // 菜单项名称
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyR],
    contextMenuGroupId: 'navigation', // 所属菜单的分组
    run: () => emit('runCode') // 菜单项点击事件
  })

  editor.addAction({
    id: 'newCode',
    label: 'New Code',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyN],
    contextMenuGroupId: 'navigation',
    run: () => emit('newCode')
  })

  editor.addAction({
    id: 'clearMessages',
    label: 'Clear Messages',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyQ],
    contextMenuGroupId: 'navigation',
    run: () => emit('clearMessages')
  })
}
