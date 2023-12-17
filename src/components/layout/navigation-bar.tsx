"use client";

import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "../theme-toggle";

import g19logo from "@/assets/g19.svg";
import { Button } from "../ui/button";

export default function NavigationBar() {
  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-[5%]">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="select-none text-5xl font-bold text-primary hover:animate-pulse">
            <Image
              src={g19logo}
              alt="G19 logo"
              height={32}
              priority
              draggable={false}
            />
          </Link>

          <nav className="flex items-center gap-1">
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
        </div>

        <ThemeToggle />
      </div>
    </section>
  );
}
