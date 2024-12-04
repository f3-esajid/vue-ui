import { HTMLAttributes } from 'vue';
import { SplitterResizeHandleProps } from 'radix-vue';
declare const _default: import('vue').DefineComponent<SplitterResizeHandleProps & {
    class?: HTMLAttributes["class"];
    withHandle?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dragging: (isDragging: boolean) => any;
}, string, import('vue').PublicProps, Readonly<SplitterResizeHandleProps & {
    class?: HTMLAttributes["class"];
    withHandle?: boolean;
}> & Readonly<{
    onDragging?: ((isDragging: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
