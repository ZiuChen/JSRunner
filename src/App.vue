<template>
  <router-view> </router-view>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/hooks/useDarkMode'
import { IS_DARK } from '@/common/symbol'

const isDark = useDarkMode()
provide(IS_DARK, isDark)
</script>
