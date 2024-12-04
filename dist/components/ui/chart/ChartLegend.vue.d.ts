import { BulletLegendItemInterface } from '@unovis/ts';
declare const _default: import('vue').DefineComponent<{
    items: BulletLegendItemInterface[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    legendItemClick: (d: BulletLegendItemInterface, i: number) => any;
    "update:items": (payload: BulletLegendItemInterface[]) => any;
}, string, import('vue').PublicProps, Readonly<{
    items: BulletLegendItemInterface[];
}> & Readonly<{
    onLegendItemClick?: ((d: BulletLegendItemInterface, i: number) => any) | undefined;
    "onUpdate:items"?: ((payload: BulletLegendItemInterface[]) => any) | undefined;
}>, {
    items: BulletLegendItemInterface[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
