import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const getInitials = (word: string): string => {
  return word.charAt(0);
};