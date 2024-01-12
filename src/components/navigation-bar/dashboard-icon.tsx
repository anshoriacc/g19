"use client";

import { cn } from "@/lib/utils";
import { Kanit } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const kanit = Kanit({ weight: ["600"], subsets: ["latin"] });

const DashboardIcon = () => {
  const pathname = usePathname();

  return (
    pathname === "/dashboard" && (
      <>
        <div className="h-10 w-[1px] bg-neutral-200 dark:bg-neutral-800" />
        <Link
          href="/dashboard"
          className={cn(
            "select-none text-2xl",
            "bg-gradient-to-b from-neutral-900 from-60% bg-clip-text text-transparent dark:from-neutral-50",
          )}>
          <span className={kanit.className}>Dashboard</span>
        </Link>
      </>
    )
  );
};

export default DashboardIcon;
