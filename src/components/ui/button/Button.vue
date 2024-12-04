<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { buttonVariants } from '.'
import { cn } from '@/lib/utils'

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
  loading?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'button',
  loading: false
})
</script>

<template>
  <component
    :is="as"
    :class="cn('space-x-2', buttonVariants({ variant, size }), $attrs.class ?? '')"
    :disabled="loading || disabled"
  >
    <Loader2 v-if="loading" class="inline-block max-h-4 min-h-4 min-w-4 max-w-4 animate-spin" />
    <div><slot /></div>
  </component>
</template>
