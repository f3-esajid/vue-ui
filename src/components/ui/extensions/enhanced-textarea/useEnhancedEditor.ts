// import { ref, onMounted, watch, type Ref } from 'vue'
import { useEditor } from '@tiptap/vue-3'
import { type Editor } from '@tiptap/core'
import type { Content, EditorOptions } from '@tiptap/vue-3'
import { StarterKit } from '@tiptap/starter-kit'
import { Typography } from '@tiptap/extension-typography'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Underline } from '@tiptap/extension-underline'
import { TextStyle } from '@tiptap/extension-text-style'
import { Markdown } from 'tiptap-markdown'
import { TaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'

import {
  Link,
  HorizontalRule,
  CodeBlockLowlight,
  Selection,
  Color,
  UnsetAllMarks,
  ResetMarksOnEnter
} from './extensions'
import { getOutput } from './utils'
// import { useThrottle } from '../composables/use-throttle'

export interface UseEnhancedEditorProps extends Partial<EditorOptions> {
  modelValue?: Content
  output?: 'html' | 'json' | 'text'
  placeholder?: string
  editorClassName?: string
  throttleDelay?: number
  onUpdate?: (content: Content) => void
  onBlur?: (content: Content) => void
}

const createExtensions = (placeholder: string) => [
  StarterKit.configure({
    horizontalRule: false,
    codeBlock: false,
    paragraph: { HTMLAttributes: { class: 'text-node' } },
    heading: { HTMLAttributes: { class: 'heading-node' } },
    blockquote: { HTMLAttributes: { class: 'block-node' } },
    bulletList: { HTMLAttributes: { class: 'list-node' } },
    orderedList: { HTMLAttributes: { class: 'list-node' } },
    code: { HTMLAttributes: { class: 'inline', spellcheck: 'false' } },
    dropcursor: { width: 2, class: 'ProseMirror-dropcursor border' }
  }),
  Link,
  Underline,
  Color,
  TextStyle,
  Selection,
  Typography,
  UnsetAllMarks,
  HorizontalRule,
  ResetMarksOnEnter,
  CodeBlockLowlight,
  Placeholder.configure({ placeholder: () => placeholder }),
  Markdown,
  TaskList,
  TaskItem
]

export function useEnhancedEditor({
  modelValue,
  output = 'html',
  placeholder = '',
  editorClassName = '',
  onUpdate,
  onBlur,
  ...props
}: UseEnhancedEditorProps) {
  const handleUpdate = (currentEditor: Editor) => {
    onUpdate?.(getOutput(currentEditor, output))
  }

  const handleCreate = (currentEditor: Editor) => {
    if (modelValue && currentEditor.isEmpty) {
      currentEditor.commands.setContent(modelValue)
    }
  }

  const handleBlur = (currentEditor: Editor) => {
    onBlur?.(getOutput(currentEditor, output))
  }
  // Watch for external modelValue changes
  // watch(
  //   () => modelValue,
  //   (newValue) => {
  //     if (editor.value && newValue !== undefined) {
  //       if (getOutput(editor.value, output) !== newValue) {
  //         editor.value.commands.setContent(newValue)
  //       }
  //     }
  //   }
  // )
  return useEditor({
    extensions: createExtensions(placeholder),
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        class: `focus:outline-none ${editorClassName}`
      }
    },
    onUpdate: ({ editor }) => handleUpdate(editor),
    onCreate: ({ editor }) => handleCreate(editor),
    onBlur: ({ editor }) => handleBlur(editor),
    ...props
  })
}
