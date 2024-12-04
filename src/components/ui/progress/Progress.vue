<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ProgressIndicator, ProgressRoot, type ProgressRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<
    ProgressRootProps & { class?: HTMLAttributes['class'] } & {
      secondaryValue?: number
      primaryColor?: string
      secondaryColor?: string
    }
  >(),
  {
    modelValue: 0,
    secondaryValue: 0,
    primaryColor: 'bg-primary',
    secondaryColor: 'bg-indigo-200'
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', props.class)"
  >
    <ProgressIndicator
      :class="`${secondaryColor} absolute h-full w-full flex-1 rounded-full transition-all`"
      :style="`transform: translateX(-${100 - (props.secondaryValue ?? 0)}%);`"
    />
    <ProgressIndicator
      :class="`${primaryColor} absolute h-full w-full flex-1 rounded-full transition-all`"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
