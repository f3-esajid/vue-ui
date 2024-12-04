<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { X } from 'lucide-vue-next'
const emits = defineEmits<{
  (e: 'close'): void
}>()
defineProps<{
  title: string
  description?: string
  dismissable: boolean
  isError: boolean
}>()
</script>
<template>
  <div
    :class="`top-border-radius border-t-4 border-solid ${
      isError ? 'border-red-500' : 'border-green-500'
    }`"
  >
    <div class="copied-sonner-style">
      <div class="grid-rows-auto grid">
        <div class="flex items-center justify-between">
          <div class="font-semibold">
            {{ title }}
          </div>
          <Button v-if="dismissable" variant="ghost" size="sm" class="p-1" @click="emits('close')">
            <X class="h-4" />
          </Button>
        </div>

        <div v-if="description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.copied-sonner-style {
  padding: 16px;
  background: var(--normal-bg);
  border: 1px solid var(--normal-border);
  color: var(--normal-text);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: var(--width);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.top-border-radius {
  border-radius: calc(var(--border-radius) * 1.5);
}
</style>
