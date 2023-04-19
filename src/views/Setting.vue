<template>
  <div class="setting">
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import { usePageBack } from '@/hooks/usePageBack'

const { BackButton } = usePageBack()
</script>

<style scoped></style>
