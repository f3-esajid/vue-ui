import { Component } from 'vue';
import { BaseChartProps } from '.';
declare const _default: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, never> & (Pick<BaseChartProps<T>, "data" | "index" | "colors" | "margin" | "showLegend" | "showTooltip" | "filterOpacity"> & {
        /**
         * Sets the name of the key containing the quantitative chart values.
         */
        category: Extract<keyof T, string>;
        /**
         * Change the type of the chart
         * @default "donut"
         */
        radius?: number;
        arcWidth?: number;
        useEvents?: boolean;
        type?: "donut" | "pie";
        /**
         * Function to sort the segment
         */
        sortFunction?: (a: any, b: any) => number | undefined;
        /**
         * Controls the formatting for the label.
         */
        valueFormatter?: (tick: number, i?: number, ticks?: number[]) => string;
        /**
         * Render custom tooltip component.
         */
        customTooltip?: Component;
    })> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: {};
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
