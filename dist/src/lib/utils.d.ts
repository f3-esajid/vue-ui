import { ClassValue } from 'clsx';

export declare function cn(...inputs: ClassValue[]): string;
export declare const parsePhone: (phoneString: string) => {
    areaCode: string | undefined;
    prefix: string | undefined;
    lineNumber: string;
};
