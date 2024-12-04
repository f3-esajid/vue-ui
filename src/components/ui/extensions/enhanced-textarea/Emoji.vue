<script setup lang="ts">
import { Editor } from '@tiptap/core'
import EmojiSelector from '../emoji-selector/EmojiSelector.vue'
import type { EmojiExt } from 'vue3-emoji-picker'
import ToolbarButton from './ToolbarButton.vue'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    editor: Editor
    disabled?: boolean
    isActive?: boolean
  }>(),
  {
    disabled: false,
    isActive: false
  }
)
const open = ref(false)
const onSelectEmoji = (emoji: EmojiExt) => {
  props.editor.chain().focus().insertContent(emoji.i).run()
}
</script>

<template>
  <ToolbarButton
    :disabled="disabled"
    :isActive="isActive"
    tooltip="Add Emojis"
    aria-label="Add Emojis"
    :handle-action="() => (open = true)"
  >
    <template #icon>
      <EmojiSelector v-model:open="open" @select="onSelectEmoji" />
    </template>
  </ToolbarButton>
</template>
