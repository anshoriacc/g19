import Link from "next/link";
import { Kanit } from "next/font/google";

import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { DropdownMenuMobile } from "../dropdown-menu-mobile";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { LogoutButton } from "../logout-button";
import DropdownMenuAdmin from "../dropdown-menu-admin";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

const NavigationBar = async () => {
  const session = await auth();

  return (
    <section className="border-b border-b-neutral-200 bg-white dark:border-b-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              "select-none text-5xl",
              "bg-gradient-to-b from-primary from-60% bg-clip-text text-transparent",
            )}>
            <span className={kanit.className}>G19</span>
          </Link>

          {session && (
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
          )}
        </div>

        <div className="hidden items-center gap-6 transition-all md:flex">
          <nav className=" flex items-center gap-1">
            <Link href="/rental">
              <Button variant="ghost">Rental Kendaraan</Button>
            </Link>

            <Link href="/tour">
              <Button variant="ghost">Tour</Button>
            </Link>

            <Link href="/carter">
              <Button variant="ghost">Carter</Button>
            </Link>
          </nav>

          <ThemeToggle />

          {session && <DropdownMenuAdmin />}
        </div>

        <div className="flex items-center transition-all md:hidden">
          <DropdownMenuMobile />
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
