import { Editor } from '@tiptap/core';
type TextStyleAction = 'bold' | 'italic' | 'underline' | 'strikethrough' | 'code' | 'clearFormatting';
declare const _default: import('vue').DefineComponent<{
    editor: Editor;
    mainActionCount?: number;
    actions: TextStyleAction[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    editor: Editor;
    mainActionCount?: number;
    actions: TextStyleAction[];
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
