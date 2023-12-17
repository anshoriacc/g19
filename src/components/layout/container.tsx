import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function Container({ children, className, ...props }: Props) {
  return (
    <main
      className={cn(
        "mx-auto min-h-[calc(100vh-4rem)] max-w-[1200px] bg-neutral-50 px-[5%] py-6 dark:bg-neutral-900",
        className,
      )}
      {...props}>
      {children}
    </main>
  );
}
