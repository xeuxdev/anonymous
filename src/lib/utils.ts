import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = process.env.VERCEL_URL
  ? process.env.VERCEL_URL
  : "http://localhost:3000"
