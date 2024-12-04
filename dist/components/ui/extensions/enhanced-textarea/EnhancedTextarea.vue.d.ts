import { HTMLAttributes } from 'vue';
import { Content } from '@tiptap/vue-3';
declare function __VLS_template(): {
    slots: {
        top?(_: {
            editor: import('@tiptap/vue-3').Editor;
        }): any;
        bottom?(_: {
            editor: import('@tiptap/vue-3').Editor;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    modelValue?: Content;
    class?: HTMLAttributes["class"];
    editorContentClassName?: string;
    editorClassName?: string;
    placeholder?: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Content) => any;
}, string, import('vue').PublicProps, Readonly<{
    modelValue?: Content;
    class?: HTMLAttributes["class"];
    editorContentClassName?: string;
    editorClassName?: string;
    placeholder?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: Content) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
