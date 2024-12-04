<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import 'vue3-emoji-picker/css'
import { SmilePlus } from 'lucide-vue-next'
import EmojiPicker, { type EmojiExt } from 'vue3-emoji-picker'

type Theme = 'light' | 'dark' | 'auto'
withDefaults(
  defineProps<{
    open?: boolean
    theme?: Theme
  }>(),
  { open: false, theme: 'auto' }
)

const emits = defineEmits(['select', 'update:open'])

/*
  // Emoji object structure
  {
      i: "😚",
      n: ["kissing face"],
      r: "1f61a", // with skin tone
      t: "neutral", // skin tone
      u: "1f61a" // without tone
  }
*/
const onSelectEmoji = (emoji: EmojiExt) => {
  emits('select', emoji)
  emits('update:open', false)
}
</script>

<template>
  <Popover :open="open" @update:open="emits('update:open', $event)">
    <PopoverTrigger as-child>
      <Button variant="ghost" v-bind="$attrs" @click="() => emits('update:open', !open)">
        <SmilePlus class="inline-block h-5 w-5 cursor-pointer" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <EmojiPicker :native="true" @select="onSelectEmoji" :theme="theme" />
    </PopoverContent>
  </Popover>
</template>
