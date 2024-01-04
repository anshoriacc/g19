import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "../theme-toggle";

import g19logo from "@/assets/g19.svg";
import { Button } from "../ui/button";
import { DropdownMenuMobile } from "../dropdown-menu-mobile";

export default function NavigationBar() {
  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="select-none text-5xl font-bold text-primary">
          <Image
            src={g19logo}
            alt="G19 logo"
            height={32}
            draggable={false}
            priority
          />
        </Link>

        <div className="hidden items-center gap-4 transition-all md:flex">
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
        </div>

        <div className="flex items-center gap-4 transition-all md:hidden">
          <DropdownMenuMobile />
        </div>
      </div>
    </section>
  );
}
