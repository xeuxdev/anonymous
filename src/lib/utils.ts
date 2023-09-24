import { siteConfig } from "@/config/site"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL =
  process.env.BASE_URL == undefined
    ? process.env.NODE_ENV === "production"
      ? `${siteConfig.url}`
      : "http://localhost:3000"
    : process.env.BASE_URL
