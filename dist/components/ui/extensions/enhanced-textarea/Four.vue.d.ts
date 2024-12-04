import { Editor } from '@tiptap/core';
type ListItemAction = 'orderedList' | 'bulletList' | 'checkList';
declare const _default: import('vue').DefineComponent<{
    editor: Editor;
    activeActions?: ListItemAction[];
    mainActionCount?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    editor: Editor;
    activeActions?: ListItemAction[];
    mainActionCount?: number;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
