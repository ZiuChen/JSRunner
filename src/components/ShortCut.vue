<template>
  <div class="short-cut">
    <a-input
      class="short-cut-input"
      ref="inputRef"
      v-model="shortcutString"
      @keydown="handleInputKeydown"
      @keyup="handleInputKeyup"
      readonly
    />
    <a-button @click="handleResetClick">重置</a-button>
  </div>
</template>

<script setup lang="ts">
import { Input, Message } from '@arco-design/web-vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  defaultKeys: {
    type: Object as PropType<string[]>,
    required: true
  }
})

const emit = defineEmits(['change'])

const metas = ['Control', 'Meta', 'Alt', 'Shift']
const fnKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']
const inputRef = ref<InstanceType<typeof Input>>()
const shortcutKeys = ref<string[]>([])
const shortcutString = computed(() => shortcutKeys.value.join(' + '))
const isMeta = ref(false)
const isFn = ref(false)

function handleInputKeydown(ev: KeyboardEvent) {
  const { key } = ev
  const isNumOrWord = key.match(/^[0-9a-zA-Z]$/) !== null

  if (metas.includes(key)) {
    isMeta.value = true
    shortcutKeys.value = [key]
  }

  if (fnKeys.includes(key)) {
    isFn.value = true
  }

  if (isMeta.value) {
    isNumOrWord && shortcutKeys.value.push(key.toUpperCase())
  } else {
    shortcutKeys.value = isFn.value ? [key] : shortcutKeys.value
  }
}

function handleInputKeyup(ev: KeyboardEvent) {
  const { key } = ev
  if (metas.includes(key)) isMeta.value = false
  if (fnKeys.includes(key)) isFn.value = false
  if (metas.includes(key)) {
    shortcutKeys.value.length === 1
      ? (shortcutKeys.value = [])
      : emit('change', props.id, shortcutKeys.value),
      inputRef.value?.blur()
  }
}

function handleResetClick() {
  shortcutKeys.value = props.defaultKeys
  isMeta.value = false
  isFn.value = false
  Message.success('快捷键已重置')
}
</script>

<style lang="less" scoped>
.short-cut {
  padding: 5px 0;
}

.short-cut-input {
  width: 25%;
}
</style>
