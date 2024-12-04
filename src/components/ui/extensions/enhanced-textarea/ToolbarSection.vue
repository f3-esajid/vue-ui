<script setup lang="ts">
import { computed, ref, toValue } from 'vue'
import type { Editor } from '@tiptap/core'
import type { FormatAction } from './types'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import ToolbarButton from './ToolbarButton.vue'
import ShortcutKey from './ShortcutKey.vue'
import { getShortcutKey } from './utils'
import { MoreHorizontal } from 'lucide-vue-next'
const isOpen = ref(false)

const props = withDefaults(
  defineProps<{
    editor: Editor
    actions: FormatAction[]

    mainActionCount?: number
    dropdownIcon?: any
    dropdownTooltip?: string
    dropdownClassName?: string
  }>(),
  {
    mainActionCount: 0,
    dropdownTooltip: 'More Options',
    dropdownClassName: 'w-12'
  }
)

const sortedActions = computed(() => {
  return props.actions
})
const mainActions = computed<FormatAction[]>(() => {
  return sortedActions.value.slice(0, props.mainActionCount)
})
const dropdownActions = computed(() => {
  return sortedActions.value.slice(props.mainActionCount)
})

const isDropdownActive = computed(() =>
  dropdownActions.value.some((action) => action.isActive.value)
)
function tooltipForAction(action: any) {
  return `${action.label} ${action.shortcuts.map((s: string) => getShortcutKey(s).symbol).join(' ')}`
}
</script>

<template>
  <ToolbarButton
    v-for="action in mainActions"
    :key="action.label"
    :disabled="!action?.canExecute"
    :isActive="action?.isActive"
    :handle-action="action?.action"
    :tooltip="tooltipForAction(action)"
    :aria-label="action.label"
  >
    <template #icon>
      <component v-if="action?.icon" :is="action?.icon" class="size-5" />
    </template>
  </ToolbarButton>

  <DropdownMenu v-if="dropdownActions.length" v-model:open="isOpen">
    <DropdownMenuTrigger asChild>
      <ToolbarButton
        :isActive="isDropdownActive"
        :tooltip="dropdownTooltip"
        :aria-label="dropdownTooltip"
        :class="cn(dropdownClassName)"
        :handle-action="() => (isOpen = true)"
      >
        <template #icon>
          <MoreHorizontal class="size-5" />
        </template>
      </ToolbarButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="w-full">
      <DropdownMenuItem
        v-for="action in dropdownActions"
        :key="action.label"
        @click="() => action?.action()"
        :disabled="!action?.canExecute"
        :class="
          cn('flex flex-row items-center justify-between gap-4', {
            'bg-muted': toValue(action?.isActive) == true
          })
        "
        :aria-label="action.label"
      >
        <span class="grow">{{ action.label }}</span>
        <ShortcutKey :keys="action.shortcuts" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
