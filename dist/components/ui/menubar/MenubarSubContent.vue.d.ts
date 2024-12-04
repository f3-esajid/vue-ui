import { HTMLAttributes } from 'vue';
import { MenubarSubContentProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<MenubarSubContentProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent) => any;
    focusOutside: (event: import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any;
    interactOutside: (event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent | import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
    entryFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<MenubarSubContentProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent | import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onEntryFocus?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
