import { Editor } from '@tiptap/core';
type ShortcutKeyResult = {
    symbol: string;
    readable: string;
};
export declare const isClient: () => boolean;
export declare const isMacOS: () => boolean;
export declare const getShortcutKey: (key: string) => ShortcutKeyResult;
export declare const getShortcutKeys: (keys: string[]) => ShortcutKeyResult[];
export declare const getOutput: (editor: Editor, format: any) => object | string;
export {};
