<template>
  <div class="setting">
    <BackButton />
    <ThemeSetting />
  </div>
</template>

<script setup lang="ts">
import { usePageBack } from '@/hooks/usePageBack'

const { BackButton } = usePageBack()
</script>

<style lang="less" scoped>
.setting {
  margin: 0 50px;
}
</style>
