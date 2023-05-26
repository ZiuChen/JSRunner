<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['Console']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/store'

const settingStore = useSettingStore()
settingStore.initSetting()
</script>
