<script lang="ts" setup>
import { inject } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './FormItem.vue'
const form = inject(FORM_ITEM_INJECTION_KEY)
const errors = form?.errors
</script>

<template>
  <p v-for="e in errors" :key="e" class="text-xs font-medium text-destructive">{{ e }}</p>
</template>
