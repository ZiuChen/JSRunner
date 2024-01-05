import type { defineEmits } from 'vue'
import { monaco } from '@/common/monaco'
// @ts-expect-error
import { IQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput'
import { CodeHistory } from '@/store/useHistoryStore'
import { useCodeStore } from '@/store'

/**
 * 注册自定义菜单项
 * 并透传到组件
 */
export function addActions(
  editor: monaco.editor.IStandaloneCodeEditor,
  emit: ReturnType<typeof defineEmits>
) {
  // Add a new command, for getting an accessor.
  const quickInputCommand = editor.addCommand(0, (accessor, func) => {
    // a hacker way to get the input service
    const quickInputService = accessor.get(IQuickInputService)
    func(quickInputService)
  })

  editor.addAction({
    id: 'quickInput',
    label: 'Quick Input',
    contextMenuGroupId: 'buildin-action',
    run: (editor, { list, callback }) => {
      editor.trigger('', quickInputCommand!, (quickInput: any) => {
        quickInput.pick(list).then((selected?: any) => {
          callback(selected)
        })
      })
    }
  })

  editor.addAction({
    id: 'run', // 菜单项 id
    label: 'Run', // 菜单项名称
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyR],
    contextMenuGroupId: 'buildin-action', // 所属菜单的分组
    run: () => emit('action', 'runCode') // 菜单项点击事件
  })

  editor.addAction({
    id: 'newCode',
    label: 'New Code',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyN],
    contextMenuGroupId: 'buildin-action',
    run: () => emit('action', 'newCode')
  })

  editor.addAction({
    id: 'clearConsole',
    label: 'Clear Console',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyQ],
    contextMenuGroupId: 'buildin-action',
    run: () => emit('action', 'clearConsole')
  })

  editor.addAction({
    id: 'toggleReadonly',
    label: 'Toggle Readonly',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE],
    contextMenuGroupId: 'buildin-action',
    run: () => emit('action', 'toggleReadonly')
  })

  editor.addAction({
    id: 'showCommands',
    label: 'Show Commands',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP],
    contextMenuGroupId: 'buildin-action',
    run: () => emit('action', 'showCommands')
  })

  editor.addAction({
    id: 'listHistory',
    label: 'List History',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyL],
    contextMenuGroupId: 'buildin-action',
    run: () => {
      emit('action', 'listHistory')
    }
  })
}
