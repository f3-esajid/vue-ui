<script lang="ts" setup>
import { inject } from 'vue'
import { Slot } from 'radix-vue'
import { FORM_ITEM_INJECTION_KEY } from './FormItem.vue'
const { valid } = inject(FORM_ITEM_INJECTION_KEY) || { valid: true }
</script>

<template>
  <Slot :aria-invalid="!valid">
    <slot />
  </Slot>
</template>
