<script setup lang="ts">
import { Circle } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    selected: boolean
    size?: 24
  }>(),
  { size: 24 }
)
const emits = defineEmits<{
  (e: 'update:selected', value: boolean): Promise<void>
}>()
</script>
<template>
  <button
    @click.stop="emits('update:selected', !selected)"
    class="ring-offset-background aspect-square h-4 w-4 rounded-full border border-primary text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    tabindex="-1"
    :data-active="selected"
    role="radio"
    type="button"
    :aria-checked="selected"
    :data-state="selected ? 'checked' : 'unchecked'"
    value="value"
    aria-label="value"
  >
    <span :data-state="selected ? 'checked' : 'unchecked'" class="flex items-center justify-center">
      <Circle
        :size="size"
        class="h-2.5 w-2.5"
        :class="{
          'fill-current text-current': selected,
          'text-transparent': !selected
        }"
      />
    </span>
  </button>
</template>
