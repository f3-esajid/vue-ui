<script setup lang="ts">
import { withDefaults, type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    type?: string
    placeholder?: string
    pattern?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    type: 'text',
    pattern: ''
  }
)

const emits = defineEmits<{
  (e: 'blur', value: FocusEvent): void
  (e: 'focus', value: FocusEvent): void
  (e: 'input', value: Event): void
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
})
</script>

<template>
  <div class="relative">
    <input
      :placeholder="props.placeholder"
      v-model="modelValue"
      :type="type"
      :pattern="pattern"
      :class="
        cn(
          'text-foreground-text ring-offset-background flex h-10 w-full rounded-md border border-input bg-layer-0 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:italic placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
      @input="emits('input', $event)"
      @blur="emits('blur', $event)"
      @focus="emits('focus', $event)"
    />
    <div class="absolute inset-y-0 right-0 flex items-center pr-3"><slot name="icon"></slot></div>
  </div>
</template>
