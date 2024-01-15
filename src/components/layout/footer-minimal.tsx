import dayjs from "dayjs";

import { cn } from "@/lib/utils";
import { ScrollToTop } from "../scroll-to-top";

type Props = { className?: string };

export const FooterMinimal = ({ className }: Props) => {
  return (
    <footer className="border-t border-t-neutral-200 bg-white dark:border-t-neutral-800 dark:bg-neutral-950">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6",
          className,
        )}>
        <span className="text-neutral-500">
          © {dayjs().get("year")} G19 Tour & Travel.
        </span>

        <ScrollToTop />
      </div>
    </footer>
  );
};
