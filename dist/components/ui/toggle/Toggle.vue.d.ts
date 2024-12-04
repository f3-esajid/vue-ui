import { ToggleProps } from 'radix-vue';
import { HTMLAttributes } from 'vue';
import { ToggleVariants } from '.';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ToggleProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleVariants["variant"];
    size?: ToggleVariants["size"];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:pressed": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ToggleProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleVariants["variant"];
    size?: ToggleVariants["size"];
}> & Readonly<{
    "onUpdate:pressed"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    size: "default" | "sm" | "lg" | null;
    variant: "default" | "outline" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
