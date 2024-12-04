<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import type { FormatAction } from './types'

// import type { VariantProps } from 'class-variance-authority'
import {
  CodeIcon,
  Bold,
  Italic,
  StrikethroughIcon,
  RemoveFormatting,
  UnderlineIcon
} from 'lucide-vue-next'
import ToolbarSection from './ToolbarSection.vue'
import { computed } from 'vue'

type TextStyleAction =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'code'
  | 'clearFormatting'

interface TextStyle extends FormatAction {
  value: TextStyleAction
}

const formatActions: TextStyle[] = [
  {
    value: 'bold',
    label: 'Bold',
    icon: Bold,

    action: () => props.editor.chain().focus().toggleBold().run(),
    isActive: computed(() => {
      return props.editor.isActive('bold')
    }),
    canExecute: computed(
      () =>
        props.editor.can().chain().focus().toggleBold().run() && !props.editor.isActive('codeBlock')
    ),
    shortcuts: ['mod', 'B']
  },
  {
    value: 'italic',
    label: 'Italic',
    icon: Italic,
    action: () => props.editor.chain().focus().toggleItalic().run(),
    isActive: computed(() => props.editor.isActive('italic')),
    canExecute: computed(
      () =>
        props.editor.can().chain().focus().toggleItalic().run() &&
        !props.editor.isActive('codeBlock')
    ),
    shortcuts: ['mod', 'I']
  },
  {
    value: 'underline',
    label: 'Underline',
    icon: UnderlineIcon,
    action: () => props.editor.chain().focus().toggleUnderline().run(),
    isActive: computed(() => props.editor.isActive('underline')),
    canExecute: computed(
      () =>
        props.editor.can().chain().focus().toggleUnderline().run() &&
        !props.editor.isActive('codeBlock')
    ),
    shortcuts: ['mod', 'U']
  },
  {
    value: 'strikethrough',
    label: 'Strikethrough',
    icon: StrikethroughIcon,
    action: () => props.editor.chain().focus().toggleStrike().run(),
    isActive: computed(() => props.editor.isActive('strike')),
    canExecute: computed(
      () =>
        props.editor.can().chain().focus().toggleStrike().run() &&
        !props.editor.isActive('codeBlock')
    ),
    shortcuts: ['mod', 'shift', 'S']
  },
  {
    value: 'code',
    label: 'Code',
    icon: CodeIcon,
    action: () => props.editor.chain().focus().toggleCode().run(),
    isActive: computed(() => props.editor.isActive('code')),
    canExecute: computed(
      () =>
        props.editor.can().chain().focus().toggleCode().run() && !props.editor.isActive('codeBlock')
    ),
    shortcuts: ['mod', 'E']
  },
  {
    value: 'clearFormatting',
    label: 'Clear formatting',
    icon: RemoveFormatting,
    action: () => props.editor.chain().focus().unsetAllMarks().run(),
    isActive: computed(() => false),
    canExecute: computed(
      () =>
        props.editor.can().chain().focus().unsetAllMarks().run() &&
        !props.editor.isActive('codeBlock')
    ),
    shortcuts: ['mod', '\\']
  }
]

const props = defineProps<{
  editor: Editor
  mainActionCount?: number
  actions: TextStyleAction[]
}>()

const filteredActions = computed(() => {
  return formatActions.filter((action) => {
    return props.actions.includes(action.value)
  })
})
</script>
<template>
  <ToolbarSection
    :editor="editor"
    :actions="filteredActions"
    :mainActionCount="3"
    dropdownTooltip="More formatting"
    dropdownClassName="w-8"
  />
</template>
