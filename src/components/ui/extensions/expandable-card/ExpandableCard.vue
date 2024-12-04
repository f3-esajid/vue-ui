<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../card'
import { Button } from '../../button'
import { Skeleton } from '../../skeleton'
import { ref, computed } from 'vue'
import { ChevronsUpDown, ChevronsDownUp } from 'lucide-vue-next'
import Tooltip from '../../tooltip/Tooltip.vue'
import TooltipTrigger from '../../tooltip/TooltipTrigger.vue'
import TooltipContent from '../../tooltip/TooltipContent.vue'

const props = withDefaults(
  defineProps<{
    maxHeight?: string
    loading?: boolean
    expanded?: boolean
    fade?: boolean
  }>(),
  {
    fade: true
  }
)

const emits = defineEmits<{
  (e: 'update:expanded', value: boolean): void
  (e: 'show'): void
  (e: 'hide'): void
}>()

const contentRef = ref<HTMLElement | null>(null)

const maxHeightClass = computed(() => `max-h-${props.maxHeight || '28'}`)

function toggleExpanded() {
  emits('update:expanded', !props.expanded)
  if (props.expanded) {
    emits('hide')
  } else {
    emits('show')
  }
}
</script>

<template>
  <Card class="relative rounded-xl border-border bg-card">
    <CardHeader
      v-if="!props.loading"
      class="mb-1 flex flex-col gap-y-1.5 py-2 pb-0 text-foreground"
    >
      <CardTitle class="flex items-center space-x-2">
        <slot name="title"></slot>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="ghost"
              size="sm"
              class="rounded-full p-1 text-muted-foreground"
              @click="toggleExpanded"
            >
              <ChevronsDownUp v-if="expanded" />
              <ChevronsUpDown v-else />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {{ expanded ? 'Collapse' : 'Expand' }}
          </TooltipContent>
        </Tooltip>
      </CardTitle>
    </CardHeader>

    <CardContent v-if="props.loading" class="text-sm text-foreground">
      <div class="space-y-3">
        <Skeleton class="mb-6 h-6 w-1/3 rounded-lg" />
        <Skeleton class="h-6 w-full rounded-lg" />
        <Skeleton class="h-6 w-3/4 rounded-lg" />
        <Skeleton class="h-6 w-1/2 rounded-lg" /></div
    ></CardContent>
    <CardContent v-else class="py-0 text-sm">
      <slot name="no-content"> </slot>
      <div
        ref="contentRef"
        class="transition-max-height overflow-hidden duration-300 ease-in-out"
        :class="{
          [maxHeightClass]: !expanded,
          'fade-bottom': !expanded && props.fade,
          'pb-6': expanded
        }"
      >
        <slot name="content" :expanded="expanded"> </slot>
      </div>
    </CardContent>
    <CardFooter v-if="$slots.footer">
      <slot name="footer"></slot>
    </CardFooter>
  </Card>
</template>

<style scoped>
.fade-bottom {
  mask-image: linear-gradient(to bottom, black 15%, transparent 100%);
}
</style>
