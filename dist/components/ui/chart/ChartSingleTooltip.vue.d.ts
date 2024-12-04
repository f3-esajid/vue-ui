import { BulletLegendItemInterface } from '@unovis/ts';
import { Component } from 'vue';
declare const _default: import('vue').DefineComponent<{
    selector: string;
    index: string;
    items?: BulletLegendItemInterface[];
    valueFormatter?: (tick: number, i?: number, ticks?: number[]) => string;
    customTooltip?: Component;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    selector: string;
    index: string;
    items?: BulletLegendItemInterface[];
    valueFormatter?: (tick: number, i?: number, ticks?: number[]) => string;
    customTooltip?: Component;
}> & Readonly<{}>, {
    valueFormatter: (tick: number, i?: number, ticks?: number[]) => string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
