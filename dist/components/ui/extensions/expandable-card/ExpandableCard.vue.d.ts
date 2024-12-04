declare function __VLS_template(): {
    slots: {
        title?(_: {}): any;
        "no-content"?(_: {}): any;
        content?(_: {
            expanded: boolean | undefined;
        }): any;
        footer?(_: {}): any;
    };
    refs: {
        contentRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    maxHeight?: string;
    loading?: boolean;
    expanded?: boolean;
    fade?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:expanded": (value: boolean) => any;
    show: () => any;
    hide: () => any;
}, string, import('vue').PublicProps, Readonly<{
    maxHeight?: string;
    loading?: boolean;
    expanded?: boolean;
    fade?: boolean;
}> & Readonly<{
    "onUpdate:expanded"?: ((value: boolean) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}>, {
    fade: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
