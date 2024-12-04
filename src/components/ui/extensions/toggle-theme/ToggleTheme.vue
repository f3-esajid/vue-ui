<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()" class="mt-3 rounded-md p-3 hover:bg-muted hover:text-foreground">
    <span v-if="isDark" class=""><Moon /></span>
    <span v-else class=""><Sun /></span>
  </button>
</template>
