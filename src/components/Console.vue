<template>
  <div class="console">
    <transition name="emerge" mode="out-in">
      <div class="empty-tip" v-if="!messages.length">控制台为空</div>
      <transition-group v-else name="emerge" tag="div">
        <div
          ref="msgContainerRef"
          v-for="item of messages"
          :key="item.id"
          :class="{
            message: true,
            'message-log': !item.type || item.type === 'log',
            'message-warn': item.type === 'warn',
            'message-error': item.type === 'error',
            'message-info': item.type === 'info'
          }"
        >
          <a-button
            class="time-status"
            size="mini"
            type="text"
            @click="handleCopyClick(item.timeStamp)"
          >
            {{ formatTime(item.timeStamp).split(' ')[1] }}
          </a-button>
          <div class="content" @click="handleCopyClick(getMessageContent(item.content))">
            {{ getMessageContent(item.content) }}
          </div>
        </div>
      </transition-group>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import { Message } from '@arco-design/web-vue'
import { formatTime, copyText, classof } from '@/utils'

export interface PropsType {
  messages: IMessage[]
}

export interface IMessage {
  content: (object | string | number)[]
  type?: 'log' | 'warn' | 'error' | 'info'
  timeStamp: number
  id: string
}

const props = defineProps<PropsType>()
const msgContainerRef = ref<HTMLElement[] | null>(null)

// Scroll to bottom when messages changed
watch(
  () => props.messages.length,
  () => {
    const msgArray = msgContainerRef.value
    if (!msgArray) return

    const lastMsg = msgArray[msgArray.length - 1]
    const container = lastMsg?.parentElement?.parentElement?.parentElement // TODO: better way

    if (lastMsg && container) {
      nextTick(() => (container.scrollTop = lastMsg.offsetTop))
    }
  }
)

function getMessageContent(content: (typeof props.messages)[number]['content']) {
  return toRaw(content)
    .map((item) => {
      if (classof(item) === 'Array' || classof(item) === 'Object') {
        return JSON.stringify(item)
      } else if (classof(item) === 'String') {
        return `"${item}"`
      }
      return item
    })
    .join('\n')
}

function handleCopyClick(text: string | number) {
  const res = copyText(String(text))
  res ? Message.success('复制成功') : Message.error('复制失败')
}
</script>

<style lang="less" scoped>
@import '@/style/scrollbar.less';
.console {
  padding-bottom: 5px;
  user-select: none;
}
.empty-tip {
  text-align: center;
  color: var(--text-color);
  padding: 10px 0;
}
.message {
  color: var(--text-color);
  max-height: 200px;
  overflow: auto;
  padding: 5px;
  .scrollbar();

  .time-status {
    padding: 0;
  }
  .content {
    cursor: pointer;
  }

  &-log {
    color: var(--text-color);
  }
  &-warn {
    color: #f5a623;
  }
  &-error {
    color: #f5222d;
  }
  &-info {
    color: #1890ff;
  }
}
</style>
