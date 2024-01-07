"use client";

import { motion } from "framer-motion";
import { Kanit } from "next/font/google";

import { cn } from "@/utils";
import ServicesCard from "./services-card";

const kanit = Kanit({ weight: ["700"] });

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.2,
        type: "spring",
        bounce: 50,
        stiffness: 100,
      }}
      className="mx-auto max-w-[1200px] space-y-6 p-6">
      <h2
        className={cn(
          kanit.className,
          "self-center bg-gradient-to-b from-neutral-900 from-60% to-neutral-500 bg-clip-text text-center text-3xl text-transparent md:text-4xl dark:from-neutral-50",
        )}>
        Layanan
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <ServicesCard type="rental" />

        <ServicesCard type="tour" />

        <ServicesCard type="carter" />
      </div>
    </motion.div>
  );
}
