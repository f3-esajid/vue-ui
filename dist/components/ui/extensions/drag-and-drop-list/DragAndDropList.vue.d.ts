import { HTMLAttributes } from 'vue';
type Item = Record<string, any> & {
    id: string | number;
};
declare function __VLS_template(): {
    slots: {
        default?(_: {
            item: Item;
        }): any;
        input?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    class?: HTMLAttributes["class"];
    iteratorClass?: HTMLAttributes["class"];
    modelValue: Item[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    class?: HTMLAttributes["class"];
    iteratorClass?: HTMLAttributes["class"];
    modelValue: Item[];
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
