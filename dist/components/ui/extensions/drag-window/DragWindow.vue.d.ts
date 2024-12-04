import { HTMLAttributes } from 'vue';
declare function handleMousedown(e: MouseEvent): void;
declare function reset(): void;
declare function __VLS_template(): {
    slots: {
        default?(_: {
            hasBeenDragged: boolean;
            handleMousedown: typeof handleMousedown;
            reset: typeof reset;
            DragHandle: import('vue').DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import('vue').PublicProps>;
        }): any;
    };
    refs: {
        wrapper: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    class?: HTMLAttributes["class"];
    anchor?: {
        left?: string;
        right?: string;
        bottom?: string;
        top?: string;
    };
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    class?: HTMLAttributes["class"];
    anchor?: {
        left?: string;
        right?: string;
        bottom?: string;
        top?: string;
    };
}> & Readonly<{}>, {
    anchor: {
        left?: string;
        right?: string;
        bottom?: string;
        top?: string;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
