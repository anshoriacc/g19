import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Container = ({ children, className, ...props }: Props) => {
  return (
    <main
      className={cn(
        "mx-auto min-h-[calc(100dvh-4rem)] max-w-[1200px] p-6",
        className,
      )}
      {...props}>
      {children}
    </main>
  );
};
