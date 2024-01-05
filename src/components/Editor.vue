<template>
  <div class="editor" ref="editorRef"></div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import { onStartTyping, useDocumentVisibility } from '@vueuse/core'
import { monaco } from '@/common/monaco'
import { IS_DARK, EVENT_FOCUS_EDITOR } from '@/common/symbol'
import { addActions } from '@/common/monaco/addActions'
import { $on } from '@/hooks/useEventBus'

export type EditorAction =
  | 'runCode'
  | 'newCode'
  | 'clearConsole'
  | 'toggleReadonly'
  | 'showCommands'
  | 'listHistory'

const props = withDefaults(
  defineProps<{
    code: string
    language: 'javascript' | 'typescript' | 'json'
    readonly: boolean
    debounceInterval: number
    indentType: 'space' | 'tab'
    indentSize: number
  }>(),
  {
    code: '',
    language: 'javascript',
    readonly: false,
    debounceInterval: 500,
    indentType: 'space',
    indentSize: 2
  }
)

const emit = defineEmits<{
  codeChange: [string]
  action: [EditorAction]
}>()

const editorRef = ref<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null
let disposeHandler: monaco.IDisposable | null = null

const isDark = inject(IS_DARK)
const visible = useDocumentVisibility()

watch(
  () => props.code,
  (val) => {
    if (editor && val !== editor?.getValue()) {
      editor.setValue(val)
    }
  }
)

watch(
  () => props.readonly,
  (val) => {
    nextTick(() => {
      editor?.updateOptions({ readOnly: val })
    })
  },
  { immediate: true }
)

watch(
  () => props.debounceInterval,
  (val) => {
    if (disposeHandler) {
      disposeHandler.dispose()

      disposeHandler =
        editor?.getModel()?.onDidChangeContent(
          debounce(() => {
            emit('codeChange', editor!.getValue())
          }, val)
        ) || null
    }
  },
  { immediate: true }
)

watch(
  () => props.indentType,
  (val) => {
    nextTick(() => {
      editor?.updateOptions({ insertSpaces: val === 'space' })
    })
  }
)

watch(
  () => props.indentSize,
  (val) => {
    nextTick(() => {
      editor?.updateOptions({ tabSize: val })
    })
  }
)

watch(
  () => isDark?.value,
  (val) => {
    nextTick(() => {
      monaco.editor.setTheme(val ? 'vs-dark' : 'vs')
    })
  },
  { immediate: true }
)

watch(visible, (val) => {
  if (val) {
    editor?.focus()
  }
})

$on(EVENT_FOCUS_EDITOR, () => {
  editor?.focus()
})

onMounted(() => {
  initEditor()
})

onUnmounted(() => {
  destoryEditor()
})

onStartTyping(() => {
  editor?.focus()
})

/**
 * 初始化编辑器
 */
function initEditor() {
  if (editor) {
    destoryEditor()
  }

  editor = monaco.editor.create(editorRef.value as HTMLDivElement, {
    value: props.code,
    language: props.language,
    theme: isDark?.value ? 'vs-dark' : 'vs',
    tabSize: props.indentSize,
    insertSpaces: props.indentType === 'space',
    detectIndentation: false, // 关闭自动检测缩进
    minimap: {
      enabled: false
    },
    automaticLayout: true
  })

  addActions(editor, emit)

  disposeHandler =
    editor.getModel()?.onDidChangeContent(
      debounce(() => {
        emit('codeChange', editor!.getValue())
      }, props.debounceInterval)
    ) || null

  editor.focus()
}

/**
 * 销毁编辑器
 */
function destoryEditor() {
  editor?.dispose()
  editor = null
}

defineExpose({
  editor: computed(() => editor)
})
</script>

<style lang="less" scoped>
.editor {
  height: 100%;
  width: 100%;
}
</style>
