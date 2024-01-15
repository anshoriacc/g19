"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
            variant="ghost"
            className={cn(
              pathname.startsWith(item.href) &&
                "text-primary hover:text-primary",
            )}>
            {item.name}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
