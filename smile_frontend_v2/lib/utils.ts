import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts backend media URLs to local proxied paths
 * e.g., http://localhost:8000/media/projects/image.jpg -> /media/projects/image.jpg
 */
export function getMediaUrl(url: string | null | undefined, fallback: string = '/gallery/Empowering-the-New-Generation.jpg'): string {
  if (!url) return fallback;

  // If already a relative path, return as is
  if (url.startsWith('/')) return url;

  // Extract the path from the full URL
  try {
    const urlObj = new URL(url);
    // Return the path portion (e.g., /media/projects/image.jpg)
    return urlObj.pathname;
  } catch {
    // If URL parsing fails, return the original or fallback
    return url || fallback;
  }
}
