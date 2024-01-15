"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const navigationList = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Konfigurasi", href: "/dashboard/config" },
  { name: "Banner", href: "/dashboard/banner" },
];

const serviceList = [
  { name: "Rental", href: "/dashboard/rental" },
  { name: "Tour", href: "/dashboard/tour" },
  { name: "Carter", href: "/dashboard/carter" },
];

export const NavigationListSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-6">
      <nav className="flex flex-col gap-2 mb-6">
        {navigationList.map(item => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start p-1 text-neutral-500",
                pathname === item.href &&
                  "text-primary hover:text-primary dark:hover:text-primary font-bold",
              )}>
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-2">
        <h4 className="p-1 text-sm font-semibold">Layanan</h4>
        {serviceList.map(item => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start p-1 text-neutral-500",
                pathname === item.href &&
                  "text-primary hover:text-primary dark:hover:text-primary font-bold",
              )}>
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};
