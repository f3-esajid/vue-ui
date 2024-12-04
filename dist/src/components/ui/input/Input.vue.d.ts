import { HTMLAttributes } from 'vue';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    defaultValue?: string | number | undefined;
    modelValue?: string | number | undefined;
    type?: string | undefined;
    pattern?: string | undefined;
    class?: HTMLAttributes['class'];
}>, {
    type: string;
    pattern: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (value: FocusEvent) => void;
    focus: (value: FocusEvent) => void;
    input: (value: Event) => void;
    "update:modelValue": (payload: string | number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    defaultValue?: string | number | undefined;
    modelValue?: string | number | undefined;
    type?: string | undefined;
    pattern?: string | undefined;
    class?: HTMLAttributes['class'];
}>, {
    type: string;
    pattern: string;
}>>> & {
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    onFocus?: ((value: FocusEvent) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onInput?: ((value: Event) => any) | undefined;
}, {
    type: string;
    pattern: string;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
