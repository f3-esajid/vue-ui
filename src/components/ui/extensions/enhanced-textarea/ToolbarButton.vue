<script setup lang="ts">
import { toValue } from 'vue'
import { TooltipContentProps } from 'radix-vue'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Toggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'

const props = defineProps<{
  className?: string
  isActive: any
  tooltip?: string
  handleAction?: () => void
  tooltipOptions?: TooltipContentProps
}>()

function handle() {
  if (props.handleAction) {
    props.handleAction()
  }
}
</script>
<template>
  <Tooltip>
    <TooltipTrigger asChild>
      <Toggle
        size="sm"
        class=""
        :class="cn('size-8 p-0', { 'bg-muted': toValue(isActive) == true }, className)"
        @click="handle()"
      >
        <span>
          <slot name="icon" />
        </span>
      </Toggle>
    </TooltipTrigger>
    <TooltipContent v-bind="tooltipOptions">
      <div class="flex flex-col items-center text-center">{{ tooltip }}</div>
    </TooltipContent>
  </Tooltip>
</template>
