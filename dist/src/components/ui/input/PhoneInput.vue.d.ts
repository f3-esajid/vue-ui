declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    defaultValue?: string | undefined;
    modelValue?: string | undefined;
    errors?: string[] | undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:model-value": (payload: string) => void;
    blur: (value: FocusEvent) => void;
    focus: (value: FocusEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    defaultValue?: string | undefined;
    modelValue?: string | undefined;
    errors?: string[] | undefined;
}>>> & {
    onFocus?: ((value: FocusEvent) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    "onUpdate:model-value"?: ((payload: string) => any) | undefined;
}, {}, {}>;
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
