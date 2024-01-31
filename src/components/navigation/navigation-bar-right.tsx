import Link from "next/link";

import { auth } from "@/auth";
import { getSystemConfig } from "@/data/app-system";
import { NavigationList } from "./navigation-list";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { DropdownMenuAdmin } from "./dropdown-menu-admin";
import { DropdownMenuMobile } from "./dropdown-menu-mobile";

export const NavigationBarRight = async () => {
  const session = await auth();

  const systemConfig = await getSystemConfig();
  return (
    <>
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
    </>
  );
};
