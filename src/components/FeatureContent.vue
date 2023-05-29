<template>
  <div class="feature-content">
    <template v-if="model.type === 'input' && !model.isNumber">
      {{ model.label }}
      <a-input v-model="value" :placeholder="model.label" />
    </template>
    <template v-if="model.type === 'input' && model.isNumber">
      {{ model.label }}
      <a-input-number
        v-model="value"
        :placeholder="model.label"
        :min="model.min"
        :max="model.max"
      />
    </template>
    <template v-else-if="model.type === 'dropdown'">
      {{ model.label }}
      <a-dropdown-button @select="handleDropdownSelect">
        {{ value }}
        <template #content>
          <a-doption v-for="o of model.options" :key="o.value" :value="o.value">
            {{ o.label }}
          </a-doption>
        </template>
      </a-dropdown-button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Config } from '@/common/feature'

defineProps<{
  model: Config
}>()

const value = defineModel<any>()

function handleDropdownSelect(selected: any) {
  value.value = selected
}
</script>

<style scoped>
.feature-content {
  margin-top: 10px;
  width: 50%;
}
</style>
