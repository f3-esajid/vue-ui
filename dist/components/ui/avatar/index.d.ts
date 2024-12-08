import { VariantProps } from 'class-variance-authority';
export { default as Avatar } from './Avatar.vue';
export { default as AvatarImage } from './AvatarImage.vue';
export { default as AvatarFallback } from './AvatarFallback.vue';
export declare const avatarVariant: (props?: ({
    size?: "base" | "xs" | "sm" | "lg" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AvatarVariants = VariantProps<typeof avatarVariant>;
