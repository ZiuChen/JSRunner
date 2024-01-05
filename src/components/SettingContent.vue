<template>
  <div class="setting-content">
    <h3>{{ title }}</h3>
    <a-tooltip v-if="!!desc" :content="desc">
      <icon-info-circle></icon-info-circle>
    </a-tooltip>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    default: ''
  }
})
</script>
