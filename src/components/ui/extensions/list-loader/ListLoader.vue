<script setup lang="ts">
import { Skeleton } from '../../skeleton'
type Props = {
  loading: boolean
  rows?: number
}

withDefaults(defineProps<Props>(), {
  loading: false,
  rows: 3
})
</script>
<template>
  <template v-if="loading">
    <div v-for="n in rows" :key="n" class="ml-6 flex w-full items-center space-x-10 py-4">
      <slot name="loading-row">
        <Skeleton class="h-8 w-8 rounded-full" />
        <div class="w-full space-y-2">
          <Skeleton class="h-4 w-[25%]" />
          <Skeleton class="h-4 w-[20%]" />
          <Skeleton class="h-4 w-[90%]" />
        </div>
      </slot>
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>
