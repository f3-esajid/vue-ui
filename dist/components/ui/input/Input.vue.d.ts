import { HTMLAttributes } from 'vue';
declare function __VLS_template(): {
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    defaultValue?: string | number;
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    pattern?: string;
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    input: (value: Event) => any;
    "update:modelValue": (payload: string | number) => any;
    blur: (value: FocusEvent) => any;
    focus: (value: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<{
    defaultValue?: string | number;
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    pattern?: string;
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onInput?: ((value: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onFocus?: ((value: FocusEvent) => any) | undefined;
}>, {
    type: string;
    pattern: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
