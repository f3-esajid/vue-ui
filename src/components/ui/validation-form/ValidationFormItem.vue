<script setup lang="ts">
import { FormMessage, FormItem, FormDescription, FormLabel, FormControl } from '../form'
import { useDebounceFn } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    validate: Function
    field: string
    label?: string
    description?: string
    errors?: string[]
    required?: boolean
    debounceDelay?: number
  }>(),
  {
    errors: () => [] as string[],
    debounceDelay: 250
  }
)

// METHODS
const debouncedTriggerValidate = useDebounceFn(triggerValidate, props.debounceDelay)

function triggerFocus() {
  // clear FE errors?
}

function triggerValidate() {
  props.validate({ fields: [props.field] })
}
</script>

<template>
  <FormItem :errors="errors" :field="field">
    <FormLabel v-if="label"
      >{{ label }} <span v-if="required" class="text-red-500">*</span></FormLabel
    >
    <FormControl>
      <slot :triggerValidate="debouncedTriggerValidate" :triggerFocus="triggerFocus"> </slot>
    </FormControl>
    <FormMessage />
    <FormDescription v-if="description">
      {{ description }}
    </FormDescription>
  </FormItem>
</template>
