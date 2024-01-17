"use client";

import { Kanit } from "next/font/google";
import { ChevronUp } from "lucide-react";

import { Button } from "./ui/button";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

export const ScrollToTop = () => {
  return (
    <Button
      variant="ghost"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group p-2">
      <ChevronUp className="text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-all" />
    </Button>
  );
};
