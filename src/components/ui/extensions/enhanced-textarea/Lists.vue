<script setup lang="ts">
import type { Editor } from '@tiptap/core'

import type { FormatAction } from './types'
import { computed } from 'vue'

import { ListOrdered, List, ListChecks } from 'lucide-vue-next'

import ToolbarSection from './ToolbarSection.vue'

type ListItemAction = 'orderedList' | 'bulletList' | 'checkList'
interface ListItem extends FormatAction {
  value: ListItemAction
}

const formatActions: ListItem[] = [
  {
    value: 'orderedList',
    label: 'Numbered list',
    icon: ListOrdered,
    isActive: computed(() => props.editor.isActive('orderedList')),
    action: () => props.editor.chain().focus().toggleOrderedList().run(),
    canExecute: computed(() => props.editor.can().chain().focus().toggleOrderedList().run()),
    shortcuts: ['mod', 'shift', '7']
  },
  {
    value: 'bulletList',
    label: 'Bullet list',
    icon: List,
    isActive: computed(() => props.editor.isActive('bulletList')),
    action: () => props.editor.chain().focus().toggleBulletList().run(),
    canExecute: computed(() => props.editor.can().chain().focus().toggleBulletList().run()),
    shortcuts: ['mod', 'shift', '8']
  },
  {
    value: 'checkList',
    label: 'Check list',
    icon: ListChecks,
    isActive: computed(() => props.editor.isActive('taskList')),
    action: () => props.editor.chain().focus().toggleTaskList().run(),
    canExecute: computed(() => props.editor.can().chain().focus().toggleTaskList().run()),
    shortcuts: ['mod', 'shift', '9']
  }
]

const props = defineProps<{
  editor: Editor
  actions?: ListItemAction[]
  mainActionCount?: number
}>()
const filteredActions = computed(() => {
  return formatActions.filter((action) => {
    return props.actions?.includes(action.value)
  })
})
</script>
<template>
  <ToolbarSection :editor="editor" :actions="filteredActions" :main-action-count="mainActionCount">
  </ToolbarSection>
</template>
