import { ComputedRef, HTMLAttributes, InjectionKey } from 'vue';
export declare const FORM_ITEM_INJECTION_KEY: InjectionKey<{
    errors: ComputedRef<string[]>;
    valid: ComputedRef<boolean>;
}>;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    class?: HTMLAttributes["class"];
    errors?: string[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    class?: HTMLAttributes["class"];
    errors?: string[];
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
