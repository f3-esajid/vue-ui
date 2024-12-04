<script setup lang="ts">
import { computed } from 'vue'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<
  SwitchRootProps & { class?: string; label?: string; labelPosition?: 'left' | 'right' }
>()
const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <label
    v-if="props.labelPosition === 'left'"
    class="mr-2 cursor-pointer select-none pt-1 leading-none"
    :for="props.id"
  >
    {{ props.label }}
  </label>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'focus-visible:ring-offset-background peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        props.class
      )
    "
  >
    <SwitchThumb
      :class="
        cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-layer-0 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
        )
      "
    />
  </SwitchRoot>

  <label
    v-if="props.labelPosition !== 'left'"
    class="ml-2 cursor-pointer select-none pt-1 leading-none"
    :for="props.id"
  >
    {{ props.label }}
  </label>
</template>
