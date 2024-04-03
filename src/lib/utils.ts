import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ...inputs becomes an inputs array
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
