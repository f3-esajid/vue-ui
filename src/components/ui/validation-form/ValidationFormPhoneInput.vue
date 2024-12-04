<script setup lang="ts">
// TS
import { withDefaults } from 'vue'

// COMPONENTS
import { ValidationFormItem } from '.'
import { PhoneInput } from '../input'
defineOptions({
  inheritAttrs: false
})
withDefaults(
  defineProps<{
    validate: Function
    modelValue: string
    field?: string
    label?: string
    description?: string
    errors?: string[]
    debounceDelay?: number
  }>(),
  {
    field: 'phone',
    label: 'Phone Number',
    errors: () => [] as string[]
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()
</script>
<template>
  <ValidationFormItem
    :field="field"
    :label="label"
    :validate="validate"
    :errors="errors"
    :debounceDelay="debounceDelay">
    <template #default="{ triggerValidate }">
      <PhoneInput
        :model-value="modelValue"
        v-bind="$attrs"
        @update:model-value="emits('update:modelValue', $event)"
        @input="triggerValidate"
      />
    </template>
  </ValidationFormItem>
</template>
