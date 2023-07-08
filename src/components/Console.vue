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
          <a-tooltip content="复制时间戳">
            <a-button
              class="status"
              size="mini"
              type="text"
              @click="handleCopyClick(item.timeStamp)"
            >
              {{ formatTime(item.timeStamp).split(' ')[1] }}
            </a-button>
          </a-tooltip>
          <a-tooltip content="JSON编辑器">
            <a-button
              class="status"
              size="mini"
              type="text"
              status="warning"
              v-if="isElectron && ['Array', 'Object'].includes(classof(item.content[0]))"
              @click="handleRedirectClick(item.content[0])"
            >
              JSON
            </a-button>
          </a-tooltip>
          <div class="content" @click="handleCopyClick(getMessageContent(item.content))">
            {{ getMessageContent(item.content) }}
          </div>
        </div>
      </transition-group>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { formatTime, copyText, classof, isElectron } from '@/utils'

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
  console.log(content)
  return toRaw(content)
    .map((item) => {
      const c = classof(item)
      if (['Array', 'Object'].includes(c)) {
        // 处理循环引用
        const getCircularReplacer = () => {
          const seen = new WeakSet()
          return (key: any, value: any) => {
            if (typeof value === 'object' && value !== null) {
              if (seen.has(value)) {
                return key
              }
              seen.add(value)
            }
            return value
          }
        }
        try {
          return JSON.stringify(item, getCircularReplacer())
        } catch (error) {
          return `[${c}]`
        }
      } else if (c === 'String') {
        return `"${item}"`
      } else if (['Null', 'Undefined'].includes(c)) {
        return c.toLowerCase()
      } else if (c === 'Symbol') {
        return item.toString()
      }
      return item
    })
    .join('\n')
}

function handleCopyClick(text: string | number) {
  const res = copyText(String(text))
  res ? Message.success('复制成功') : Message.error('复制失败')
}

function handleRedirectClick(jsonObj: any) {
  if (!isElectron) return
  utools.redirect('Json', JSON.stringify(jsonObj))
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

  .status {
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
