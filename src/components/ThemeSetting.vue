<template>
  <SettingContent title="插件主题">
    <a-radio-group v-model="settingStore.theme" @change="settingStore.setTheme">
      <a-radio value="default">跟随系统</a-radio>
      <a-radio value="dark">深色模式</a-radio>
      <a-radio value="light">浅色模式</a-radio>
    </a-radio-group>
  </SettingContent>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store'

const settingStore = useSettingStore()
</script>
