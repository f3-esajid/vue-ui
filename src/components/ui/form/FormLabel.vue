<script lang="ts" setup>
import { inject, type HTMLAttributes } from 'vue'
import { Label, type LabelProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { FORM_ITEM_INJECTION_KEY } from './FormItem.vue'
const form = inject(FORM_ITEM_INJECTION_KEY)
const valid = form?.valid

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <Label
    :class="
      cn(
        'block text-left text-sm font-medium tracking-tight text-foreground',

        !valid && 'text-destructive',
        props.class
      )
    "
  >
    <slot />
  </Label>
</template>
