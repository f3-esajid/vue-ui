<script setup lang="ts">
// NOTE: This code is adapted from a react WYSIYG editor
//  https://github.com/Aslam97/shadcn-minimal-tiptap/tree/0c83971c093d4fa5e993b23dff0b8200fe65b120/src/components/minimal-tiptap

import './styles/index.css'
import { ref, type HTMLAttributes } from 'vue'
import { EditorContent, type Content } from '@tiptap/vue-3'

import Toolbar from './Toolbar.vue'
import { cn } from '@/lib/utils'

import { useEnhancedEditor, type UseEnhancedEditorProps } from './useEnhancedEditor'

const props = defineProps<{
  modelValue?: Content
  class?: HTMLAttributes['class']
  editorContentClassName?: string
  editorClassName?: string
  placeholder?: string
}>()
const emits = defineEmits<{
  (e: 'update:modelValue', value: Content): void
}>()

const editor = ref(
  useEnhancedEditor({
    modelValue: props.modelValue,
    placeholder: props.placeholder,
    editorClassName: cn('grow', props.editorClassName),
    onUpdate(content) {
      emits('update:modelValue', content)
    }
  } as UseEnhancedEditorProps)
)
</script>
<template>
  <div
    v-if="editor"
    :class="
      cn('flex flex-col rounded-md border border-input focus-within:border-primary', props.class)
    "
  >
    <div class="shrink-0">
      <slot name="top" :editor="editor">
        <Toolbar :editor="editor" />
      </slot>
    </div>
    <EditorContent
      :editor="editor"
      :class="
        cn(
          'minimal-tiptap-editor flex max-h-36 min-h-20 w-full grow flex-col overflow-y-auto p-4',
          editorContentClassName
        )
      "
    />
    <div class="shrink-0">
      <slot name="bottom" :editor="editor"> </slot>
    </div>
  </div>
</template>
