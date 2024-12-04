import { HTMLAttributes } from 'vue';
import { MenubarCheckboxItemProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<MenubarCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (event: Event) => any;
    "update:checked": (payload: boolean) => any;
}, string, import('vue').PublicProps, Readonly<MenubarCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onSelect?: ((event: Event) => any) | undefined;
    "onUpdate:checked"?: ((payload: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
