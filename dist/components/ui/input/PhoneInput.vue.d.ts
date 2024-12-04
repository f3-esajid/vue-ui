declare const _default: import('vue').DefineComponent<{
    defaultValue?: string;
    modelValue?: string;
    errors?: string[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: (value: FocusEvent) => any;
    focus: (value: FocusEvent) => any;
    "update:model-value": (payload: string) => any;
}, string, import('vue').PublicProps, Readonly<{
    defaultValue?: string;
    modelValue?: string;
    errors?: string[];
}> & Readonly<{
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onFocus?: ((value: FocusEvent) => any) | undefined;
    "onUpdate:model-value"?: ((payload: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
