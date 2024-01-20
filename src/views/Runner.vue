<template>
  <div class="runner">
    <div class="btns">
      <a-button @click="store.newCode"><icon-plus></icon-plus></a-button>
      <a-button @click="store.execCode"><icon-thunderbolt v-zoom="store.execState" /></a-button>
      <a-button @click="store.changeReadonly">
        <icon-lock v-if="store.readonly" v-zoom="store.readonly"></icon-lock>
        <icon-unlock v-else v-zoom="!store.readonly"></icon-unlock
      ></a-button>
      <a-button @click="$router.push('/setting')"><icon-settings /></a-button>
      <a-button @click="$router.push('/about')"><icon-info-circle /></a-button>
      <a-button @click="handleDeleteClick"><icon-delete /></a-button>
      <a-button class="width-80" @click="store.changeEnv">{{ store.currentEnv }}</a-button>
      <a-button class="width-80" @click="store.changeMode">
        {{ store.currentMode }}
      </a-button>
      <a-button @click="handleEditorAction('listHistory')" style="flex: 1">
        代码历史回溯 ({{ history.historys.length }})
      </a-button>
    </div>
    <a-split v-model:size="size" :min="0.1" :max="0.8">
      <template #first>
        <Editor
          ref="editorRef"
          :code="store.code"
          :language="'javascript'"
          :readonly="store.readonly"
          :debounce-interval="setting.codeChangeDebounce"
          :indent-type="setting.indentType"
          :indent-size="setting.indentSize"
          @code-change="store.handleCodeChange"
          @action="handleEditorAction"
        />
      </template>
      <template #second>
        <a-dropdown :trigger="['contextMenu']" alignPoint>
          <Console :messages="store.messages" @action="handleEditorAction" />
          <template #content>
            <a-doption @click="store.clearConsole"> 清空控制台 </a-doption>
          </template>
        </a-dropdown>
      </template>
    </a-split>
  </div>
</template>

<script setup lang="ts">
import { useCodeStore, useSettingStore } from '@/store'
import { setItem, getItem } from '@/utils'
import Editor, { EditorAction } from '@/components/Editor.vue'
import Console from '@/components/Console.vue'
import { useHistoryStore } from '@/store/useHistoryStore'
import { Modal } from '@arco-design/web-vue'

const editorRef = ref<InstanceType<typeof Editor> | null>(null)
const size = ref(getItem('size') || 0.75)
const store = useCodeStore()
const setting = useSettingStore()
const history = useHistoryStore()

store.init()

watch(size, (val) => setItem('size', val))

function handleDeleteClick() {
  Modal.confirm({
    title: '确认删除',
    content: '确认删除该历史记录？',
    onOk: () => {
      history.deleteHistory(store.id)
    }
  })
}

function handleEditorAction(action: EditorAction) {
  switch (action) {
    case 'runCode':
      store.execCode()
      break
    case 'newCode':
      store.newCode()
      break
    case 'clearConsole':
      store.clearConsole()
      break
    case 'toggleReadonly':
      store.changeReadonly()
      break
    case 'showCommands':
      editorRef.value?.editor?.trigger('', 'editor.action.quickCommand', null)
      break
    case 'listHistory':
      history.loadHistorys()
      const list = history.historys.map((item) => ({
        type: 'item',
        id: item.timeStamp,
        label: `${item.name || 'Untitled'} - ${new Date(item.timeStamp).toLocaleString()} - ${
          item.code
        }`
      }))

      editorRef.value?.editor?.focus()
      editorRef.value?.editor?.trigger('', 'quickInput', {
        list,
        options: {
          activeItem: list[list.findIndex((item) => item.id === store.id)]
        },
        callback: (selected?: (typeof list)[0]) => {
          if (selected) {
            useCodeStore().loadCode(selected.id)
          }
        }
      })
      break
    default:
      const exhaustiveCheck: never = action
      exhaustiveCheck
      break
  }
}
</script>

<style lang="less" scoped>
@import '@/style/scrollbar.less';

.arco-split {
  height: calc(100vh - 32px);

  :deep(.arco-split-pane) {
    .scrollbar();
  }
}

.btns {
  display: flex;

  .width-80 {
    width: 80px;
  }
}
</style>
