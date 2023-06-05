<template>
  <div class="feature">
    <a-drawer
      width="80%"
      :visible="visible"
      ok-text="保存"
      @before-open="handleDrawerBeforeOpen"
      @open="handleDrawerOpen"
      @close="handleDrawerClose"
      @ok="handleOk"
      @cancel="handleCancel"
      unmount-on-close
    >
      <template #title> 保存代码片段 </template>
      <a-input
        class="name"
        v-model="store.name"
        :max-length="25"
        placeholder="请输入代码片段名称"
        allow-clear
        show-word-limit
      />
      <a-textarea
        class="description"
        v-model="store.description"
        :max-length="50"
        placeholder="请输入代码片段描述"
        auto-size
        allow-clear
        show-word-limit
      />
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { useScriptStore, useCodeStore } from '@/store'

defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['close'])
const store = useScriptStore()
const codeStore = useCodeStore()

function handleDrawerKeydown(ev: KeyboardEvent) {
  if (ev.key === 'Escape') {
    emit('close')
    ev.stopPropagation()
  }
}

function handleDrawerBeforeOpen() {
  store.$reset() // 每次打开抽屉都重置数据
}

function handleDrawerOpen() {
  console.log('handleDrawerOpen')
  store.parseCommentBlock(codeStore.code)
  document.addEventListener('keydown', handleDrawerKeydown)
}

function handleDrawerClose() {
  document.removeEventListener('keydown', handleDrawerKeydown)
}

function handleOk() {
  store.newScript(codeStore.code) ? emit('close') : null
}

function handleCancel() {
  emit('close')
}
</script>

<style lang="less" scoped>
.description {
  margin-top: 10px;
  height: 59px;
}
</style>
