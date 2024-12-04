declare const _default: import('vue').DefineComponent<{
    validate: Function;
    modelValue?: string | number;
    field: string;
    label: string;
    description?: string;
    errors?: string[];
    required?: boolean;
    wrapperClass?: string;
    debounceDelay?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string | number) => any;
}, string, import('vue').PublicProps, Readonly<{
    validate: Function;
    modelValue?: string | number;
    field: string;
    label: string;
    description?: string;
    errors?: string[];
    required?: boolean;
    wrapperClass?: string;
    debounceDelay?: number;
}> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}>, {
    errors: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
