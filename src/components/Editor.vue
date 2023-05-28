<template>
  <div class="editor">
    <div class="instance" ref="editorRef"></div>
  </div>
</template>

<script setup lang="ts">
import { monaco } from '@/common/monaco'
import { debounce } from 'lodash-es'
import { useSettingStore } from '@/store'
import { addActions } from '@/common/monaco'

const settingStore = useSettingStore()

const props = defineProps({
  code: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['codeChange', 'runCode', 'newCode', 'clearMessages', 'saveFeature'])

const editorRef = ref<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

watch(
  () => settingStore.isDark,
  () => initEditor()
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

/**
 * 初始化编辑器
 * 挂载编辑器到DOM上并注册监听器
 */
function initEditor() {
  if (editor) {
    editor.dispose()
    editor = null
  }

  console.log('settingStore.isDark', settingStore.isDark)

  editor = monaco.editor.create(editorRef.value as HTMLDivElement, {
    value: props.code,
    language: 'javascript',
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
.instance {
  height: calc(100vh - 32px);
  width: 100%;
}
</style>
