<script setup lang="ts">
// TS
import { withDefaults, defineOptions } from 'vue'

// COMPONENTS
import { ValidationFormItem } from '.'
import { Input } from '../input'

defineOptions({
  inheritAttrs: false
})

withDefaults(
  defineProps<{
    validate: Function
    modelValue?: string | number
    field: string
    label: string
    description?: string
    errors?: string[]
    required?: boolean
    wrapperClass?: string
    debounceDelay?: number
  }>(),
  {
    errors: () => [] as string[]
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()
</script>
<template>
  <ValidationFormItem
    :class="wrapperClass"
    :field="field"
    :label="label"
    :validate="validate"
    :errors="errors"
    :required="required"
    :debounce-delay='debounceDelay'
  >
    <template #default="{ triggerValidate }">
      <Input
        :model-value="modelValue"
        v-bind="$attrs"
        @update:model-value="emits('update:modelValue', $event)"
        @input="triggerValidate"
      />
    </template>
  </ValidationFormItem>
</template>
