import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
