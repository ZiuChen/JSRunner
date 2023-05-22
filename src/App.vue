<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['Console']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/hooks/useDarkMode'
import { IS_DARK } from '@/common/symbol'

const isDark = useDarkMode()
provide(IS_DARK, isDark)
</script>
