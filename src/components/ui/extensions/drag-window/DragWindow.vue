<script setup lang="ts">
import { h, defineComponent, type HTMLAttributes, ref, computed } from 'vue'

import Button from '../../button/Button.vue'

import { useEventListener } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    anchor?: {
      left?: string
      right?: string
      bottom?: string
      top?: string
    }
  }>(),
  {
    anchor: () => ({
      bottom: '0px',
      right: '0px'
    })
  }
)

const isMouseDown = ref(false)
const offsetX = ref(0)
const offsetY = ref(0)
const anchorTop = ref(0)
const anchorLeft = ref(0)

const hasBeenDragged = ref(false)
const wrapper = ref<HTMLElement | null>(null)

const DragHandle = defineComponent((_, { slots }) => {
  return () =>
    h(
      Button,
      {
        class: isMouseDown.value ? 'cursor-grabbing' : 'cursor-grab',
        onMousedown: handleMousedown,
        onTouchstart: handleTouchStart
      },
      () => (slots.default ? slots.default() : [])
    )
})

const dragWindowHeight = computed(() => {
  return wrapper?.value?.clientHeight || 0
})
const dragWindowWidth = computed(() => {
  return wrapper?.value?.clientWidth || 0
})

const dragStyle = computed(() => {
  if (hasBeenDragged.value) {
    return {
      top: `${anchorTop.value}px`,
      left: `${anchorLeft.value}px`
    }
  } else {
    return props.anchor
  }
})
useEventListener(
  document,
  'touchmove',
  (e) => {
    if (!isMouseDown.value) return
    hasBeenDragged.value = true
    e.preventDefault()
    e.stopPropagation()

    let left = e.touches[0].clientX + offsetX.value
    let top = e.touches[0].clientY + offsetY.value

    if (left < 0 || left > window.innerWidth - dragWindowWidth.value) {
      left = left < 0 ? 0 : window.innerWidth - dragWindowWidth.value
    }

    if (top < 0 || top > window.innerHeight - dragWindowHeight.value) {
      top = top < 0 ? 0 : window.innerHeight - dragWindowHeight.value
    }
    anchorTop.value = top
    anchorLeft.value = left
  },
  { passive: false }
)

useEventListener(document, 'mousemove', (e) => {
  if (!isMouseDown.value) return
  hasBeenDragged.value = true
  e.preventDefault()

  let left = e.clientX + offsetX.value
  let top = e.clientY + offsetY.value
  if (left < 0 || left > window.innerWidth - dragWindowWidth.value) {
    left = left < 0 ? 0 : window.innerWidth - dragWindowWidth.value
  }

  if (top < 0 || top > window.innerHeight - dragWindowHeight.value) {
    top = top < 0 ? 0 : window.innerHeight - dragWindowHeight.value
  }
  anchorTop.value = top
  anchorLeft.value = left
})

useEventListener(document, ['mouseup', 'touchend'], (_) => {
  isMouseDown.value = false
})

function handleMousedown(e: MouseEvent) {
  isMouseDown.value = true
  offsetX.value = (wrapper.value?.offsetLeft || 0) - e.clientX
  offsetY.value = (wrapper.value?.offsetTop || 0) - e.clientY
}
function handleTouchStart(e: TouchEvent) {
  isMouseDown.value = true
  offsetX.value = (wrapper.value?.offsetLeft || 0) - e.touches[0].clientX
  offsetY.value = (wrapper.value?.offsetTop || 0) - e.touches[0].clientY
}

function reset() {
  hasBeenDragged.value = false
}
</script>
<template>
  <div
    ref="wrapper"
    draggable
    class="absolute"
    :class="cn('absolute', props.class)"
    :style="dragStyle"
  >
    <slot
      name="default"
      :hasBeenDragged="hasBeenDragged"
      :handleMousedown="handleMousedown"
      :reset="reset"
      :DragHandle="DragHandle"
    />
  </div>
</template>
