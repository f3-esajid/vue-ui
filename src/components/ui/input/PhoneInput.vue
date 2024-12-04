<script setup lang="ts">
import { computed, toValue } from 'vue'
import { Input } from '.'
import { parsePhone } from '@/lib/utils'

const props = defineProps<{
  defaultValue?: string
  modelValue?: string
  errors?: string[]
}>()

const emits = defineEmits<{
  (e: 'update:model-value', payload: string): void
  (e: 'blur', value: FocusEvent): void
  (e: 'focus', value: FocusEvent): void
}>()

const localModel = computed({
  get() {
    let { areaCode, prefix, lineNumber } = parsePhone(toValue(props.modelValue) || '')
    if (areaCode?.length == 3) {
      areaCode = `${areaCode}-`
    }
    return `${areaCode ?? ''}${areaCode?.length == 5 ? ' ' : ''}${prefix ?? ''}${
      prefix?.length == 3 ? '-' : ''
    }${lineNumber ?? ''}`
  },
  set(val) {
    const { areaCode, prefix, lineNumber } = parsePhone(val)
    emits(
      'update:model-value',
      `${areaCode ? '+1' : ''}${areaCode ?? ''}${prefix ?? ''}${lineNumber ?? ''}`
    )
  }
})
</script>

<template>
  <Input
    v-model="localModel"
    :data-test-value="$props.modelValue"
    type="tel"
    maxlength="14"
    @focus="emits('focus', $event)"
    @blur="emits('blur', $event)"
  />
</template>
