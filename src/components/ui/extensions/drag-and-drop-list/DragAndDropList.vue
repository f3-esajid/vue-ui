<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { cn } from '@/lib/utils'

type Item = Record<string, any> & {
  id: string | number
}

const props = defineProps<{
  class?: HTMLAttributes['class']
  iteratorClass?: HTMLAttributes['class']
  modelValue: Item[]
}>()
</script>

<template>
  <VueDraggableNext :class="cn('w-full mx-auto', props.class)">
    <div
      v-for="item in props.modelValue"
      :key="item.id"
      :class="
        cn(
          'flex items-center py-0 group transition duration-300 ease-in-out hover:bg-neutral-100 border-b last:border-b-0 border-border',
          props.iteratorClass
        )
      "
    >
      <slot :item="item" />
    </div>
    <div :class="cn('flex items-center py-1 border-b  border-border', props.iteratorClass)">
      <slot name="input" />
    </div>
  </VueDraggableNext>
</template>
