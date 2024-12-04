type ColumnDef = {
    name: string;
    label: string;
    field: string;
    align?: 'left' | 'center' | 'right';
    format?: (arg0: any) => string;
    bodyStyle?: string;
    bodyClasses?: string;
    headerStyle?: string;
    headerClasses?: string;
};
declare function __VLS_template(): {
    slots: Partial<Record<`header-cell-${string}`, (_: {}) => any>> & Partial<Record<`body-cell-${string}`, (_: {
        row: any;
    }) => any>> & {
        header?(_: {}): any;
        "body-row"?(_: {
            row: any;
        }): any;
        "no-data"?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    columns: ColumnDef[];
    rows: any[];
    rowKey?: string;
    hideHeader?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "row-click": (arg0: any) => any;
}, string, import('vue').PublicProps, Readonly<{
    columns: ColumnDef[];
    rows: any[];
    rowKey?: string;
    hideHeader?: boolean;
}> & Readonly<{
    "onRow-click"?: ((arg0: any) => any) | undefined;
}>, {
    rowKey: string;
    hideHeader: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
