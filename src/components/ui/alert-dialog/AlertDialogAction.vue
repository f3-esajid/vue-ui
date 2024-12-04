<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../button'

type AlertDialogActionPropsCustom = AlertDialogActionProps & {
  variant?:
    | 'default'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
}

const props = defineProps<AlertDialogActionPropsCustom>()
</script>

<template>
  <AlertDialogAction v-bind="props" :class="cn(buttonVariants({ variant }), $attrs.class ?? '')">
    <slot />
  </AlertDialogAction>
</template>
