import { HTMLAttributes } from 'vue';
declare const _default: import('vue').DefineComponent<{
    class?: HTMLAttributes["class"];
    defaultValue?: string;
    modelValue: string;
}, {
    focus(): void;
    insertAtTextareaCaret(text: string): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string) => any;
}, string, import('vue').PublicProps, Readonly<{
    class?: HTMLAttributes["class"];
    defaultValue?: string;
    modelValue: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
