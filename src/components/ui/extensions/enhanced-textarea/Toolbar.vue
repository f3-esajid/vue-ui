<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { type Editor } from '@tiptap/core'
import HeadingLevels from './Headings.vue'
import Typography from './Typography.vue'
import Lists from './Lists.vue'
import Emoji from './Emoji.vue'

defineProps<{
  editor: Editor
}>()
</script>
<template>
  <div class="shrink-0 overflow-x-auto border-b border-border p-2">
    <div class="flex w-max items-center gap-px">
      <HeadingLevels :editor="editor" :activeLevels="[1, 2, 3]" />

      <Separator orientation="vertical" class="mx-2 h-7" />
      <Typography
        :editor="editor"
        :actions="['bold', 'italic', 'underline', 'strikethrough', 'code', 'clearFormatting']"
        :mainActionCount="3"
      />

      <Separator orientation="vertical" class="mx-2 h-7" />

      <Lists
        :editor="editor"
        :actions="['orderedList', 'bulletList', 'checkList']"
        :mainActionCount="3"
      />
      <Separator orientation="vertical" class="mx-2 h-7" />

      <Emoji :editor="editor" />
    </div>
  </div>
</template>
