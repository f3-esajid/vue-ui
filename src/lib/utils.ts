import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parsePhone = (phoneString: string) => {
  // NOTE: ONLY WORKS FOR US PHONE NUMBERS
  const matches = phoneString
    ?.replace(/[^0-9+]+/g, '')
    ?.match(/(?:\+1)?(\d{0,3})(\d{0,3})?(\d{0,4})?/)

  let areaCode,
    prefix,
    lineNumber = ''

  if (matches) {
    if (matches[1]?.length > 0) {
      areaCode = matches[1]
    }

    if (matches[2]?.length > 0) {
      prefix = matches[2]
    }
    if (matches[3]?.length > 0) {
      lineNumber = matches[3]
    }
  }

  return {
    areaCode,
    prefix,
    lineNumber
  }
}
