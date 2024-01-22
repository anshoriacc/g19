"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CarFront,
  CarTaxiFront,
  GalleryThumbnails,
  LayoutDashboard,
  Settings2,
  TentTree,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const navigationList = [
  {
    icon: <LayoutDashboard size={18} />,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <Settings2 size={18} />,
    name: "Konfigurasi",
    href: "/config",
  },
  {
    icon: <GalleryThumbnails size={18} />,
    name: "Banner",
    href: "/banner",
  },
];

const serviceList = [
  {
    icon: <CarFront size={18} />,
    name: "Rental",
    href: "/dashboard/rental",
  },
  {
    icon: <TentTree size={18} />,
    name: "Tour",
    href: "/dashboard/tour",
  },
  {
    icon: <CarTaxiFront size={18} />,
    name: "Carter",
    href: "/dashboard/carter",
  },
];

export const NavigationListSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-[89px]">
      <nav className="mb-6 flex flex-col gap-2">
        {navigationList.map(item => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 p-1 text-neutral-500",
                pathname === item.href &&
                  "text-primary hover:text-primary dark:hover:text-primary",
              )}>
              {item.icon}

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
                "w-full justify-start gap-2 p-1 text-neutral-500",
                pathname === item.href &&
                  "text-primary hover:text-primary dark:hover:text-primary",
              )}>
              {item.icon}

              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};
