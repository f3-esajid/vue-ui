import { Content, EditorOptions } from '@tiptap/vue-3';
export interface UseEnhancedEditorProps extends Partial<EditorOptions> {
    modelValue?: Content;
    output?: 'html' | 'json' | 'text';
    placeholder?: string;
    editorClassName?: string;
    throttleDelay?: number;
    onUpdate?: (content: Content) => void;
    onBlur?: (content: Content) => void;
}
export declare function useEnhancedEditor({ modelValue, output, placeholder, editorClassName, onUpdate, onBlur, ...props }: UseEnhancedEditorProps): import('vue').ShallowRef<import('@tiptap/vue-3').Editor | undefined, import('@tiptap/vue-3').Editor | undefined>;
