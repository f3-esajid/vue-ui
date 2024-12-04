<script lang="ts">
import type { HTMLAttributes, InjectionKey } from 'vue'

export const FORM_ITEM_INJECTION_KEY = Symbol() as InjectionKey<{
  errors: ComputedRef<string[]>
  valid: ComputedRef<boolean>
}>
</script>
<script lang="ts" setup>
import { provide, useAttrs, computed, type ComputedRef } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false
})
const props = defineProps<{
  class?: HTMLAttributes['class']
  errors?: string[]
}>()

const valid = computed(() => {
  return !props.errors?.length
})

const computedErrors = computed(() => {
  return props.errors || []
})

// HACK: there is probably a smarter way to pass props to provide
provide(FORM_ITEM_INJECTION_KEY, {
  errors: computedErrors,
  valid
})

const { class: className, ...rest } = useAttrs()
</script>

<template>
  <div :class="cn('space-y-2', props.class)" v-bind="rest">
    <slot />
  </div>
</template>
