import { Suspense } from "react";

import { auth } from "@/auth";
import { Logo } from "../logo";
import { Skeleton } from "../ui/skeleton";
import { NavigationList } from "../navigation/navigation-list";
import { ThemeToggle } from "../navigation/theme-toggle";
import { DropdownMenuAdmin } from "../navigation/dropdown-menu-admin";
import { DropdownMenuMobile } from "../navigation/dropdown-menu-mobile";
import { ContactButton } from "../navigation/contact-button";

export const NavigationBar = async () => {
  const session = await auth();

  return (
    <section className="overflow-hidden border-b border-b-neutral-200 bg-white dark:border-b-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Suspense fallback={<Skeleton className="h-8 w-[72px]" />}>
          <Logo />
        </Suspense>

        <div className="hidden items-center gap-2 md:flex">
          <NavigationList />

          {!session && (
            <Suspense fallback={<Skeleton className="h-10 w-[127.13px]" />}>
              <ContactButton />
            </Suspense>
          )}

          <ThemeToggle />

          {session && <DropdownMenuAdmin />}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {!session && (
            <Suspense fallback={<Skeleton className="h-10 w-[127.13px]" />}>
              <ContactButton />
            </Suspense>
          )}

          <DropdownMenuMobile />

          {session && <DropdownMenuAdmin />}
        </div>
      </div>
    </section>
  );
};
