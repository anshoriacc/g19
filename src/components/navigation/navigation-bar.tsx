import { Suspense } from "react";

import { Logo } from "../logo";
import { Skeleton } from "../ui/skeleton";
import { NavigationBarRight } from "./navigation-bar-right";

export const NavigationBar = async () => {
  return (
    <section className="overflow-hidden border-b border-b-neutral-200 bg-white dark:border-b-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Suspense fallback={<Skeleton className="h-8 w-[72px]" />}>
          <Logo />
        </Suspense>

        <Suspense
          fallback={
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-8" />
            </div>
          }>
          <NavigationBarRight />
        </Suspense>
      </div>
    </section>
  );
};
