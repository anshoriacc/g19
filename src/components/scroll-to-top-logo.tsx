"use client";

import * as z from "zod";
import { Kanit } from "next/font/google";

import { cn } from "@/lib/utils";
import { appSystemSchema } from "@/schemas";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

type Props = { systemConfig: z.infer<typeof appSystemSchema> | null };

export const ScrollToTopLogo = ({ systemConfig }: Props) => {
  return (
    <div className="overflow-hidden">
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "cursor-pointer select-none text-5xl",
          "to-neutral-white self-start bg-gradient-to-b from-primary from-60% bg-clip-text text-transparent",
        )}>
        <span className={cn(kanit.className)}>
          {systemConfig?.logoTitle ?? "G19"}
        </span>
      </a>
    </div>
  );
};
