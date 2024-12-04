<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'

import { CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
// HACK: this is typed as any because of an odd-bug with DateValue type annotation
defineProps<{
  modelValue: any
}>()

const emits = defineEmits<{
  (e: 'update:model-value', value?: any): Promise<void>
}>()
const df = new DateFormatter('en-US', {
  dateStyle: 'long'
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        :class="cn('justify-start text-left font-normal', !modelValue && 'text-muted-foreground')"
        v-bind="$attrs"
      >
        <div class="flex items-center space-x-2">
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Pick a date' }}
        </div>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar
        :model-value="modelValue"
        @update:model-value="emits('update:model-value', $event)"
        initial-focus
      />
    </PopoverContent>
  </Popover>
</template>
