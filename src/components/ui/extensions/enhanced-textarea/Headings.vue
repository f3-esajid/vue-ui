<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import type { FormatAction } from './types'
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronDown, CaseSensitive } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import ToolbarButton from './ToolbarButton.vue'
import ShortcutKey from './ShortcutKey.vue'

interface TextStyle
  extends Omit<FormatAction, 'value' | 'icon' | 'action' | 'isActive' | 'canExecute'> {
  element: any
  level?: Level
  className: string
}

const formatActions: TextStyle[] = [
  {
    label: 'Normal Text',
    element: 'span',
    className: 'grow',
    shortcuts: ['mod', 'alt', '0']
  },
  {
    label: 'Heading 1',
    element: 'h1',
    level: 1,
    className: 'm-0 grow text-3xl font-extrabold',
    shortcuts: ['mod', 'alt', '1']
  },
  {
    label: 'Heading 2',
    element: 'h2',
    level: 2,
    className: 'm-0 grow text-xl font-bold',
    shortcuts: ['mod', 'alt', '2']
  },
  {
    label: 'Heading 3',
    element: 'h3',
    level: 3,
    className: 'm-0 grow text-lg font-semibold',
    shortcuts: ['mod', 'alt', '3']
  },
  {
    label: 'Heading 4',
    element: 'h4',
    level: 4,
    className: 'm-0 grow text-base font-semibold',
    shortcuts: ['mod', 'alt', '4']
  },
  {
    label: 'Heading 5',
    element: 'h5',
    level: 5,
    className: 'm-0 grow text-sm font-normal',
    shortcuts: ['mod', 'alt', '5']
  },
  {
    label: 'Heading 6',
    element: 'h6',
    level: 6,
    className: 'm-0 grow text-sm font-normal',
    shortcuts: ['mod', 'alt', '6']
  }
]

const props = defineProps<{
  editor: Editor
  activeLevels?: Level[]
}>()

const open = ref(false)

const filteredActions = computed(() =>
  formatActions.filter((action) => !action.level || props.activeLevels?.includes(action.level))
)

function handleStyleChange(level?: Level) {
  if (level) {
    props.editor.chain().focus().toggleHeading({ level }).run()
  } else {
    props.editor.chain().focus().setParagraph().run()
  }
}
</script>
<template>
  <DropdownMenu v-model:open="open">
    <DropdownMenuTrigger asChild>
      <ToolbarButton
        :isActive="editor.isActive('heading')"
        tooltip="Text styles"
        aria-label="Text styles"
        :pressed="editor.isActive('heading')"
        className="w-12"
        :disabled="editor.isActive('codeBlock')"
        :handleAction="() => (open = true)"
      >
        <template #icon>
          <span class="flex items-center gap-1">
            <CaseSensitive class="size-5" />

            <ChevronDown class="size-5" />
          </span>
        </template>
      </ToolbarButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="w-full">
      <DropdownMenuItem
        v-for="item in filteredActions"
        :key="item.label"
        @click="handleStyleChange(item.level)"
        :class="
          cn('flex flex-row items-center justify-between gap-4', {
            'bg-accent': item.level
              ? editor.isActive('heading', { level: item.level })
              : editor.isActive('paragraph')
          })
        "
        :aria-label="item.label"
      >
        <component :is="item.element" :class="item.className">{{ item.label }}</component>
        <ShortcutKey :keys="item.shortcuts" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
