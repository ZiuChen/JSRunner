<template>
  <div class="runner">
    <div class="btns">
      <a-tooltip content="创建新代码片段">
        <a-button @click="store.newCode"><icon-plus></icon-plus></a-button>
      </a-tooltip>
      <a-tooltip content="运行代码">
        <a-button @click="store.execCode"><icon-thunderbolt /></a-button>
      </a-tooltip>
      <a-tooltip content="清空控制台">
        <a-button @click="store.clearMessages"><icon-stop /></a-button>
      </a-tooltip>
      <a-tooltip content="关于">
        <a-button @click="$router.push('/about')"><icon-info-circle /></a-button>
      </a-tooltip>
      <a-button class="width-80" @click="store.changeEnv">{{ store.currentEnv }}</a-button>
      <a-button class="width-80" @click="store.changeMode">{{ store.currentMode }}</a-button>
      <a-dropdown :popup-max-height="false">
        <a-button class="flex-fill" @click="store.loadHistorys">代码历史回溯</a-button>
        <template #content>
          <template v-for="history of store.historys">
            <a-doption
              :class="{ 'active-option': history.id === store.codeWithId }"
              @click="store.readHistory(history.timeStamp)"
            >
              <template #icon>
                <icon-file />
              </template>
              {{ formatTime(history.timeStamp) }}
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
          :code="store.code"
          @code-change="store.handleCodeChange"
          @run-code="store.execCode"
        />
      </template>
      <template #second>
        <Console :messages="store.messages" />
      </template>
    </a-split>
  </div>
</template>

<script setup lang="ts">
import Editor from '@/components/Editor.vue'
import Console from '@/components/Console.vue'
import { useCodeStore } from '@/store'
import { setItem, getItem, formatTime } from '@/utils'

const size = ref(getItem('size') || 0.75)
const store = useCodeStore()
const lastCodeId = getItem('lastCodeId') || 0

watch(size, (val) => setItem('size', val))
onMounted(() => store.loadCode(lastCodeId))
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
.active-option {
  background-color: var(--color-primary-light-4);
  color: var(--bg-color);
}
</style>
