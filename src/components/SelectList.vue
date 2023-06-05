<template>
  <div class="select-list">
    <template v-for="item of list">
      <div class="select-item">
        <div class="left">
          <img class="logo" :src="item.logo" alt="logo" />
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
        <div class="right">
          <div class="right-title">{{ item.title }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
export interface SelectItem {
  logo: string
  title: string
  desc: string
}

const list = ref<SelectItem[]>([])
</script>

<style lang="less" scoped>
.select-list {
  height: 100%;
  width: 100%;
}
.select-item {
  display: flex;
}
</style>
