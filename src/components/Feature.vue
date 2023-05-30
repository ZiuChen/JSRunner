<template>
  <div class="feature">
    <a-drawer
      width="80%"
      :visible="visible"
      ok-text="保存"
      @open="handleDrawerOpen"
      @close="handleDrawerClose"
      @ok="handleOk"
      @cancel="handleCancel"
      unmount-on-close
    >
      <template #title> 快捷脚本 </template>
      <div class="title">
        <img class="logo" :src="store.logo" @click="handleLogoClick" alt="logo" draggable="false" />
        <div class="input-field">
          <a-input
            class="name"
            v-model="store.name"
            :max-length="50"
            placeholder="请输入脚本名称"
            allow-clear
            show-word-limit
          />
          <a-textarea
            class="description"
            v-model="store.description"
            :max-length="100"
            placeholder="请输入脚本描述"
            auto-size
            allow-clear
            show-word-limit
          />
        </div>
      </div>
      <a-divider />
      <a-button type="text" v-if="!store.isEditorVisible" @click="store.setFeatureVisible(true)">
        编辑关键字
        <template #icon>
          <icon-edit />
        </template>
      </a-button>
      <div class="editor-tip" v-if="store.isEditorVisible">
        关键字编辑器
        <icon-info-circle class="tip-icon" @click="handleTipIconClick" />
      </div>
      <Editor
        v-if="store.isEditorVisible"
        :code="store.cmdString"
        :language="'json'"
        @code-change="store.handlecmdStringChange"
      />
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { useScriptStore } from '@/store'
import { openLink } from '@/utils'

defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['close'])
const store = useScriptStore()

function handleDrawerKeydown(ev: KeyboardEvent) {
  if (ev.key === 'Escape') {
    emit('close')
    ev.stopPropagation()
  }
}

function handleDrawerOpen() {
  document.addEventListener('keydown', handleDrawerKeydown)
}

function handleDrawerClose() {
  document.removeEventListener('keydown', handleDrawerKeydown)
}

function handleOk() {
  store.saveScript()
  emit('close')
}

function handleCancel() {
  emit('close')
}

function handleLogoClick() {
  console.log('logo click')
}

function handleTipIconClick() {
  openLink('https://www.u.tools/docs/developer/config.html#features-cmds')
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
.editor-tip {
  margin: 10px 0;
  font-size: 15px;
  font-weight: bold;
  color: var(--color-text-3);
  .tip-icon {
    cursor: pointer;
  }
}
</style>
