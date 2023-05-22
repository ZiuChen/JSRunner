<template>
  <div class="short-cuts">
    <h3>快捷键设置</h3>
    <template v-for="s of shortcuts" :key="s">
      <ShortCut :description="s" :defaultValue="['Control', 'R']"></ShortCut>
    </template>
  </div>
</template>

<script setup lang="ts">
const shortcuts = ['创建新代码片段', '运行代码', '清空控制台']
</script>

<style lang="less" scoped></style>
