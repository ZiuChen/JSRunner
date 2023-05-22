<template>
  <div class="short-cuts">
    <h3>
      快捷键设置
      <a-tooltip content="支持Control/Shift/Alt+普通按键或功能键">
        <icon-info-circle></icon-info-circle>
      </a-tooltip>
    </h3>
    <template v-for="{ id, name, keys } of shortcuts" :key="id">
      <div class="desc">{{ name }}</div>
      <ShortCut :id="id" :defaultKeys="keys" @change="handleShortcutChange"></ShortCut>
    </template>
  </div>
</template>

<script setup lang="ts">
const shortcuts = [
  { id: 'newCode', name: '创建新代码片段', keys: ['Control', 'N'] },
  { id: 'execCode', name: '运行代码', keys: ['Control', 'R'] },
  { id: 'clearMessages', name: '清空控制台', keys: ['Control', 'Q'] }
]

function handleShortcutChange(name: string, key: string[]) {
  console.log(name, key)
}
</script>

<style lang="less" scoped>
.desc {
  margin-bottom: 5px;
}
</style>
