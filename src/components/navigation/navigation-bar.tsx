import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import { DropdownMenuMobile } from "./dropdown-menu-mobile";
import { auth } from "@/auth";
import { DropdownMenuAdmin } from "./dropdown-menu-admin";
import { Logo } from "../logo";
import { NavigationList } from "./navigation-list";
import { getSystemConfig } from "@/data/app-system";

export const NavigationBar = async () => {
  const session = await auth();

  const systemConfig = await getSystemConfig();

  return (
    <section className="overflow-hidden border-b border-b-neutral-200 bg-white dark:border-b-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-2 md:flex">
          <NavigationList />

          {!session && (
            <Link
              href={`https://wa.me/62${systemConfig?.phone}?text=Halo!%20`}
              target="_blank">
              <Button variant="outline">Hubungi Kami</Button>
            </Link>
          )}

          <ThemeToggle />

          {session && <DropdownMenuAdmin />}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {!session && (
            <Link
              href={`https://wa.me/62${systemConfig?.phone}?text=Halo!%20`}
              target="_blank">
              <Button variant="outline">Hubungi Kami</Button>
            </Link>
          )}

          <DropdownMenuMobile />

          {session && <DropdownMenuAdmin />}
        </div>
      </div>
    </section>
  );
};
