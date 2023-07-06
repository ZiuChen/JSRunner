<template>
  <div class="editor" ref="editorRef"></div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import { monaco, addActions } from '@/common/monaco'
import { EVENT_ON_PLUGIN_ENTER } from '@/common/customEvent'
import { useSettingStore } from '@/store'
import { useEventListener } from '@/hooks/useEventListener'

const settingStore = useSettingStore()

const props = withDefaults(
  defineProps<{
    code: string
    language: 'javascript' | 'typescript' | 'json'
  }>(),
  {
    code: '',
    language: 'javascript'
  }
)

const emit = defineEmits(['codeChange', 'runCode', 'newCode', 'clearMessages'])

const editorRef = ref<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

watch(
  () => settingStore.isDark,
  () => initEditor()
)

watch(
  () => props.code,
  (val) => {
    if (editor && val !== editor?.getValue()) editor.setValue(val)
  }
)

onMounted(() => {
  initEditor()
})

onUnmounted(() => {
  editor?.dispose()
})

defineExpose({
  editor: computed(() => editor)
})

// 自动聚焦编辑器
useEventListener(window, EVENT_ON_PLUGIN_ENTER.type, () => {
  editor?.focus()
})

useEventListener(window, 'focus', () => {
  editor?.focus()
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
    language: props.language,
    theme: settingStore.isDark ? 'vs-dark' : 'vs',
    tabSize: 2,
    minimap: {
      enabled: false
    },
    automaticLayout: true
  })

  addActions(editor, emit)

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
.editor {
  height: 100%;
  width: 100%;
}
</style>
