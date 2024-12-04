import { ComputedRef } from 'vue';
import { Editor } from '@tiptap/core';
import { EditorView } from '@tiptap/pm/view';
import { EditorState } from '@tiptap/pm/state';
export interface LinkProps {
    url: string;
    text?: string;
    openInNewTab?: boolean;
}
export interface ShouldShowProps {
    editor: Editor;
    view: EditorView;
    state: EditorState;
    oldState?: EditorState;
    from: number;
    to: number;
}
export interface FormatAction {
    label: string;
    icon?: any;
    action: () => void;
    isActive: ComputedRef<boolean>;
    canExecute: ComputedRef<boolean>;
    shortcuts: string[];
    value: string;
}
