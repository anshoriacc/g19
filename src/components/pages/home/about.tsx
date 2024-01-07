"use client";

import { Kanit } from "next/font/google";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import Map from "./map";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        bounce: 50,
        stiffness: 100,
      }}
      className="mx-auto max-w-[1200px] space-y-6 px-6 py-6">
      <h1
        className={cn(
          kanit.className,
          "self-center bg-gradient-to-b from-neutral-900 from-60% to-neutral-500 bg-clip-text text-center text-3xl text-transparent md:text-4xl dark:from-neutral-50",
        )}>
        G19 Tour & Travel
      </h1>

      <div className="flex flex-col justify-center gap-6 md:flex-row">
        <Map />

        <div className="flex flex-1 flex-col space-y-6">
          <p className="text-justify text-neutral-500">
            G19 Tour & Travel menawarkan pengalaman rental kendaraan dan
            perjalanan wisata yang tak terlupakan. Dengan armada kendaraan
            berkualitas dan paket wisata menarik, kami hadir untuk memenuhi
            kebutuhan perjalanan anda.
          </p>

          <Button className="self-center md:self-start">Hubungi Kami</Button>
        </div>
      </div>
    </motion.div>
  );
}
