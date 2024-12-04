type Theme = 'light' | 'dark' | 'auto';
declare const _default: import('vue').DefineComponent<{
    open?: boolean;
    theme?: Theme;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (...args: any[]) => void;
    "update:open": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{
    open?: boolean;
    theme?: Theme;
}> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:open"?: ((...args: any[]) => any) | undefined;
}>, {
    open: boolean;
    theme: Theme;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
