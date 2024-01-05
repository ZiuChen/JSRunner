<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['Runner']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/store'
import { IS_DARK } from './common/symbol'
import { useMedia } from './hooks/useMedia'

const store = useSettingStore()
store.init()

const isDark = computed(() => {
  const prefer = useMedia('(prefers-color-scheme: dark)')
  return store.theme === 'dark' || (store.theme === 'default' && prefer.value)
})

provide(IS_DARK, isDark)
</script>
