<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
})

const textareaRef = ref()

defineExpose({
  focus() {
    textareaRef.value && textareaRef.value.focus()
  },
  insertAtTextareaCaret(text: string) {
    if (!textareaRef.value) return

    const cursorPos = textareaRef.value.selectionStart
    const currentText = props.modelValue

    const textBeforeCursor = currentText.substring(0, cursorPos)
    const textAfterCursor = currentText.substring(cursorPos)

    emits('update:modelValue', textBeforeCursor + text + textAfterCursor)

    const newCursorPos = cursorPos + text.length
    textareaRef.value.setSelectionRange(newCursorPos, newCursorPos)

    this.focus()
  }
})
</script>

<template>
  <textarea
    ref="textareaRef"
    v-model="modelValue"
    :class="
      cn(
        'ring-offset-background flex max-h-36 min-h-20 w-full overflow-y-auto rounded-md border border-input bg-layer-0 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>
