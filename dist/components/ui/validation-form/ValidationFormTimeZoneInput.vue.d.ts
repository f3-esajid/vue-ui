declare const _default: import('vue').DefineComponent<{
    validate: Function;
    modelValue?: string;
    field?: string;
    label?: string;
    description?: string;
    errors?: string[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string) => any;
}, string, import('vue').PublicProps, Readonly<{
    validate: Function;
    modelValue?: string;
    field?: string;
    label?: string;
    description?: string;
    errors?: string[];
}> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
}>, {
    label: string;
    errors: string[];
    field: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
