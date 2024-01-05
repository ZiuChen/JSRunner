<template>
  <a-dropdown position="bl" @popup-visible-change="(v) => v && store.loadHistorys()">
    <a-button style="flex: 1">代码历史回溯 ({{ store.historys.length }})</a-button>
    <template #content>
      <template v-for="history of store.historys">
        <a-doption
          :class="{ 'active-option': history.id === code.codeWithId }"
          @click="code.readHistory(history.timeStamp)"
        >
          <template #icon>
            <icon-file />
          </template>
          {{
            history?.name
              ? `${history?.name} ${formatTime(history.timeStamp)}`
              : formatTime(history.timeStamp)
          }}
          <span class="history-delete" @click.stop="handleDeleteClick(history.timeStamp)">
            <icon-delete />
          </span>
        </a-doption>
      </template>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { useCodeStore } from '@/store'
import { useHistoryStore } from '@/store/useHistoryStore'
import { formatTime } from '@/utils'
import { Modal } from '@arco-design/web-vue'

const code = useCodeStore()
const store = useHistoryStore()

function handleDeleteClick(id: number) {
  Modal.confirm({
    title: '确认删除',
    content: '确认删除该历史记录？',
    onOk: () => {
      store.deleteHistory(id)
    }
  })
}
</script>

<style lang="less" scoped>
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
  width: 100%;
  background-color: var(--color-primary-light-4);
  color: var(--bg-color);

  &:hover {
    background-color: var(--color-primary-light-4);
    color: var(--bg-color);
  }
}
</style>
