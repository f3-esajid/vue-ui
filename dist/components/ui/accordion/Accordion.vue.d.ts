import { AccordionRootProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AccordionRootProps<string | string[], import('node_modules/radix-vue/dist/shared/types').SingleOrMultipleType>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | undefined) => any;
}, string, import('vue').PublicProps, Readonly<AccordionRootProps<string | string[], import('node_modules/radix-vue/dist/shared/types').SingleOrMultipleType>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
