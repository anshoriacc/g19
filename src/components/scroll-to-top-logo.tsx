"use client";

import { Kanit } from "next/font/google";
import { cn } from "@/lib/utils";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

export default function ScrollToTopLogo() {
  return (
    <a
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "cursor-pointer select-none text-5xl",
        "to-neutral-white self-start bg-gradient-to-b from-primary from-60% bg-clip-text text-transparent",
      )}>
      <span className={cn(kanit.className)}>G19</span>
    </a>
  );
}
