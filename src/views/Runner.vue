<template>
  <div class="runner">
    <div class="btns">
      <a-tooltip content="创建新代码片段">
        <a-button @click="store.newCode"><icon-plus></icon-plus></a-button>
      </a-tooltip>
      <a-tooltip content="运行代码">
        <a-button @click="store.execCode"><icon-thunderbolt v-zoom="store.execState" /></a-button>
      </a-tooltip>
      <a-tooltip content="清空控制台">
        <a-button @click="store.clearMessages"><icon-stop /></a-button>
      </a-tooltip>
      <a-tooltip content="设置">
        <a-button @click="$router.push('/setting')"><icon-settings /></a-button>
      </a-tooltip>
      <a-tooltip content="关于">
        <a-button @click="$router.push('/about')"><icon-info-circle /></a-button>
      </a-tooltip>
      <a-button class="width-80" @click="store.changeEnv">{{ store.currentEnv }}</a-button>
      <a-button class="width-80" @click="store.changeMode">{{ store.currentMode }}</a-button>
      <a-dropdown
        :popup-max-height="false"
        @popup-visible-change="(v) => v && store.loadHistorys()"
      >
        <a-button class="flex-fill">代码历史回溯 ({{ store.historys.length }}/99)</a-button>
        <template #content>
          <template v-for="history of store.historys">
            <a-doption
              :class="{ 'active-option': history.id === store.codeWithId }"
              @click="store.readHistory(history.timeStamp)"
            >
              <template #icon>
                <icon-file />
              </template>
              {{
                history?.name
                  ? `${history?.name} ${formatTime(history.timeStamp)}`
                  : formatTime(history.timeStamp)
              }}
              <span
                class="history-delete"
                v-if="history.id !== store.codeWithId"
                @click.stop="store.deleteHistory(history.timeStamp)"
              >
                <icon-delete />
              </span>
            </a-doption>
          </template>
        </template>
        <template #footer>
          <a-doption @click="store.emptyHistory">清空代码历史</a-doption>
        </template>
      </a-dropdown>
    </div>
    <a-split v-model:size="size" :min="0.1" :max="0.8">
      <template #first>
        <Editor
          ref="editorRef"
          :code="store.code"
          :language="'javascript'"
          @code-change="store.handleCodeChange"
          @run-code="store.execCode"
          @new-code="store.newCode"
          @clear-messages="store.clearMessages"
        />
      </template>
      <template #second>
        <Console :messages="store.messages" />
      </template>
    </a-split>
  </div>
</template>

<script setup lang="ts">
import { useCodeStore } from '@/store'
import { setItem, getItem, formatTime } from '@/utils'

const editorRef = ref()
const size = ref(getItem('size') || 0.75)
const store = useCodeStore()

store.init()

watch(size, (val) => setItem('size', val))
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
  .flex-fill {
    flex: 1;
  }
  .width-80 {
    width: 80px;
  }
}
.arco-dropdown-option {
  display: flex;
  justify-content: space-between;
}
.history-delete {
  margin-left: 10px;
  :hover {
    color: var(--color-danger-light-4);
  }
}
.active-option {
  background-color: var(--color-primary-light-4);
  color: var(--bg-color);
  &:hover {
    background-color: var(--color-primary-light-4);
    color: var(--bg-color);
  }
}
</style>
