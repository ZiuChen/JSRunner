<template>
  <keep-alive :include="['Console']">
    <router-view></router-view>
  </keep-alive>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/hooks/useDarkMode'
import { IS_DARK } from '@/common/symbol'

const isDark = useDarkMode()
provide(IS_DARK, isDark)
</script>
