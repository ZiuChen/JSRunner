<template>
  <div class="feature">
    <a-drawer
      width="80%"
      :visible="visible"
      ok-text="保存"
      @ok="handleOk"
      @cancel="handleCancel"
      @open="handleDrawerOpen"
      @keydown="handleDrawerKeydown"
    >
      <template #title> 快捷脚本 </template>
      <div class="title">
        <img
          class="logo"
          :src="scriptInfo.logo"
          @click="handleLogoClick"
          alt="logo"
          draggable="false"
        />
        <div class="input-field">
          <a-input
            class="name"
            ref="inputRef"
            v-model="scriptInfo.name"
            max-length="50"
            placeholder="请输入脚本名称"
            allow-clear
            show-word-limit
          />
          <a-textarea
            class="description"
            v-model="scriptInfo.description"
            max-length="100"
            placeholder="请输入脚本描述"
            auto-size
            allow-clear
            show-word-limit
          />
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import type { Input } from '@arco-design/web-vue'
const emit = defineEmits(['open', 'close', 'save'])
const inputRef = ref<InstanceType<typeof Input>>()
const visible = defineModel<boolean>()
const scriptInfo = reactive({
  logo: '/logo.png',
  name: '',
  description: ''
})

function handleDrawerKeydown(ev: KeyboardEvent) {
  if (ev.key === 'Escape') {
    visible.value = false
    emit('close')
    ev.stopPropagation()
  }
}

function handleDrawerOpen() {
  inputRef.value?.focus() // focus input, ESC will close drawer
}

function handleOk() {
  visible.value = false
  emit('save')
  emit('close')
}

function handleCancel() {
  visible.value = false
  emit('close')
}

function handleLogoClick() {
  console.log('logo click')
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: flex-start;
}
.logo {
  height: 100px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-text-4);
  }
}
.input-field {
  margin-left: 10px;
  width: 100%;
}
.description {
  margin-top: 10px;
  height: 59px;
}
</style>
