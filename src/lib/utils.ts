import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delimiterFormatter(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const parseTime = (time: Date) => {
  if (dayjs(time).isSame(dayjs(), "day")) {
    return `Today ${dayjs(time).format("HH:mm")}`;
  } else if (dayjs(time).isSame(dayjs().subtract(1, "day"), "day")) {
    return `Yesterday ${dayjs(time).format("HH:mm")}`;
  } else if (dayjs(time).diff(dayjs(), "day") > -7) {
    return `${dayjs(time).format("ddd HH:mm")}`;
  } else if (dayjs(time).isSame(dayjs(), "year")) {
    return `${dayjs(time).format("DD MMM HH:mm")}`;
  } else {
    return `${dayjs(time).format("DD MMM YY HH:mm")}`;
  }
};
