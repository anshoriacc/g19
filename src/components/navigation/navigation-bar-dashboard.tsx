import { Suspense } from "react";

import { ThemeToggle } from "./theme-toggle";
import { DropdownMenuAdmin } from "./dropdown-menu-admin";
import { SidebarMobile } from "./sidebar-mobile";
import { Logo } from "../logo";
import { Skeleton } from "../ui/skeleton";

export const NavigationBarDashboard = async () => {
  return (
    <section className="sticky top-0 overflow-hidden border-b border-b-neutral-200 bg-white dark:border-b-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="hidden md:block">
          <Suspense fallback={<Skeleton className="h-8 w-[72px]" />}>
            <Logo />
          </Suspense>
        </div>

        <SidebarMobile />

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <DropdownMenuAdmin />
        </div>
      </div>
    </section>
  );
};
