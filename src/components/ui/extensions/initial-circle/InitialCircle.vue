<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  initials: string
}>()
</script>
<template>
  <div
    :class="
      cn(
        'bg-secondary text-foreground w-10 h-10 rounded-full flex items-center justify-center text-md',
        $attrs.class ?? ''
      )
    "
  >
    {{ props.initials }}
  </div>
</template>
