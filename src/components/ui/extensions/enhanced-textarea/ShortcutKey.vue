<script setup lang="ts">
import { cn } from '@/lib/utils'
import { getShortcutKey } from './utils'

const props = defineProps<{
  className?: string
  keys: string[]
}>()
const modifiedKeys = props.keys.map((key) => getShortcutKey(key))
const ariaLabel = modifiedKeys.map((shortcut) => shortcut.readable).join(' + ')
</script>
<template>
  <template v-for="shortcut in modifiedKeys" :key="shortcut.symbol">
    <span :aria-label="ariaLabel" :class="cn('inline-flex items-center gap-0.5', className)">
      <kbd
        :class="
          cn(
            'inline-block min-w-2.5 text-center align-baseline font-sans text-xs font-medium capitalize text-[rgb(156,157,160)]',
            className
          )
        "
      >
        {{ shortcut.symbol }}
      </kbd>
    </span>
  </template>
</template>
