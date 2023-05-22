<template>
  <div class="editor">
    <div class="instance" ref="editorRef"></div>
  </div>
</template>

<script setup lang="ts">
import { monaco } from '@/common/monaco'
import { debounce } from 'lodash-es'
import { IS_DARK } from '@/common/symbol'

const props = defineProps({
  code: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['codeChange', 'runCode', 'newCode', 'clearMessages'])

const isDark = inject<Ref<boolean>>(IS_DARK)
const editorRef = ref<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

watch(
  () => isDark?.value,
  () => initEditor()
)

watch(
  () => props.code,
  () => {
    if (editor?.getValue() !== props.code) editor?.setValue(props.code)
  }
)

onMounted(() => {
  initEditor()
})

onUnmounted(() => {
  editor?.dispose()
})

/**
 * 初始化编辑器
 * 挂载编辑器到DOM上并注册监听器
 */
function initEditor() {
  if (editor) {
    editor.dispose()
    editor = null
  }

  editor = monaco.editor.create(editorRef.value as HTMLDivElement, {
    value: props.code,
    language: 'javascript',
    theme: isDark?.value ? 'vs-dark' : 'vs',
    tabSize: 2,
    minimap: {
      enabled: false
    },
    automaticLayout: true
  })

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

  editor.getModel()?.onDidChangeContent(
    debounce(() => {
      // IMPORTANT: toRaw() is required to get the raw value if the value is a reactive object
      // OR use original object at the beginning
      emit('codeChange', editor!.getValue())
    }, 350)
  )

  editor.focus()
}
</script>

<style lang="less" scoped>
.instance {
  height: calc(100vh - 32px);
  width: 100%;
}
</style>
