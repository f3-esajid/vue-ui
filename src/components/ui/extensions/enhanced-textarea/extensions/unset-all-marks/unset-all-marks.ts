import { Extension } from '@tiptap/vue-3'

export const UnsetAllMarks = Extension.create({
  addKeyboardShortcuts() {
    return {
      'Mod-\\': () => this.editor.commands.unsetAllMarks()
    }
  }
})
