import dayjs from "dayjs";

import { cn } from "@/lib/utils";
import { ScrollToTop } from "../scroll-to-top";
import { getSystemConfig } from "@/data/app-system";

type Props = { className?: string };

export const FooterMinimal = async ({ className }: Props) => {
  const systemConfig = await getSystemConfig();

  return (
    <footer className="border-t border-t-neutral-200 bg-white dark:border-t-neutral-800 dark:bg-neutral-950">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6",
          className,
        )}>
        <span className="text-neutral-500">
          © {dayjs().get("year")} {systemConfig?.title ?? "G19 Tour & Travel"}
        </span>

        <ScrollToTop />
      </div>
    </footer>
  );
};
