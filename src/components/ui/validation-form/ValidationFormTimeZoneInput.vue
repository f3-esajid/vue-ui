<script setup lang="ts">
// TS
import { withDefaults } from 'vue'

// COMPONENTS
import { ValidationFormItem } from '.'
import { TimezoneSelect } from '../extensions'

withDefaults(
  defineProps<{
    validate: Function
    modelValue?: string
    field?: string
    label?: string
    description?: string
    errors?: string[]
  }>(),
  {
    field: 'time_zone',
    label: 'Time Zone',
    errors: () => [] as string[]
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()
</script>
<template>
  <ValidationFormItem :field="field" :label="label" :validate="validate" :errors="errors">
    <template #default="{ triggerValidate }">
      <TimezoneSelect
        :model-value="modelValue"
        v-bind="$attrs"
        @update:model-value="emits('update:modelValue', $event)"
        @blur="triggerValidate"
      />
    </template>
  </ValidationFormItem>
</template>
