"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

const navigationList = [
  { name: "Rental Kendaraan", href: "/rental" },
  { name: "Tour", href: "/tour" },
  { name: "Carter", href: "/carter" },
];

export const NavigationList = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {navigationList.map(item => (
        <Link key={item.href} href={item.href}>
          <Button
            variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}>
            {item.href}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
