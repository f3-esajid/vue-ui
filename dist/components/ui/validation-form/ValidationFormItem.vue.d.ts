declare function triggerFocus(): void;
declare function triggerValidate(): void;
declare function __VLS_template(): {
    slots: {
        default?(_: {
            triggerValidate: import('@vueuse/core').PromisifyFn<typeof triggerValidate>;
            triggerFocus: typeof triggerFocus;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    validate: Function;
    field: string;
    label?: string;
    description?: string;
    errors?: string[];
    required?: boolean;
    debounceDelay?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    validate: Function;
    field: string;
    label?: string;
    description?: string;
    errors?: string[];
    required?: boolean;
    debounceDelay?: number;
}> & Readonly<{}>, {
    errors: string[];
    debounceDelay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
