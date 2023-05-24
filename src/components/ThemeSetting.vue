<template>
  <SettingContent title="插件主题">
    <a-radio-group v-model="theme" @change="handleChange">
      <a-radio value="default">跟随系统</a-radio>
      <a-radio value="dark">深色模式</a-radio>
      <a-radio value="light">浅色模式</a-radio>
    </a-radio-group>
  </SettingContent>
</template>

<script setup lang="ts">
import { getItem, setItem, removeItem } from '@/utils'

const theme = ref(getItem('theme') || 'default')

function handleChange(s) {
  theme.value = s
  s === 'default' ? removeItem('theme') : setItem('config/theme', s)
}
</script>
