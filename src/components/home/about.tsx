"use client";

import { Kanit } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { ServicesCard } from "./services-card";
import { cn } from "@/lib/utils";

import mapIllustration from "@/assets/images/map-illustration.svg";
import beachIllustration from "@/assets/images/beach-illustration.svg";
import ticketIllustration from "@/assets/images/ticket-illustration.svg";
import planeIllustration from "@/assets/images/plane-illustration.svg";
import yellowCarIllustration from "@/assets/images/yellow-car-illustration.svg";
import whiteCarIllustration from "@/assets/images/white-car-illustration.svg";
import suitcaseIllustration from "@/assets/images/suitcase-illustration.svg";
import backpackIllustration from "@/assets/images/backpack-illustration.svg";
import walletIllustration from "@/assets/images/wallet-illustration.svg";
import compassIllustration from "@/assets/images/compass-illustration.svg";
import { appSystemSchema } from "@/schemas";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

type Props = { systemConfig?: z.infer<typeof appSystemSchema> };

export const About = ({ systemConfig }: Props) => {
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
      className="mx-auto max-w-[1200px] space-y-6 p-6">
      <h1
        className={cn(
          kanit.className,
          "self-center bg-gradient-to-b from-neutral-900 from-60% to-neutral-500 bg-clip-text text-center text-3xl text-transparent md:text-4xl dark:from-neutral-50",
        )}>
        {systemConfig?.title ?? "G19 Tour & Travel"}
      </h1>

      <div className="flex flex-1 flex-col items-center gap-4">
        <p className="text-center text-neutral-500">
          {systemConfig?.description}
        </p>

        <Link
          href={`https://wa.me/62${systemConfig?.phone ?? ""}?text=Halo!%20`}
          target="_blank">
          <Button>Hubungi Kami</Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <ServicesCard type="rental">
          <Image
            src={mapIllustration}
            alt="map illustration"
            priority
            className={cn(
              "absolute -top-20 right-4 z-[1] rotate-12 scale-[1.5] grayscale-[0.9] transition-all duration-500",
              "group-hover:-top-24 group-hover:right-4 group-hover:rotate-6 group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={whiteCarIllustration}
            alt="white car illustration"
            priority
            className={cn(
              "absolute -bottom-2 right-24 z-[1] grayscale-[0.9] transition-all duration-1000",
              "group-hover:-bottom-2 group-hover:right-64 group-hover:scale-[1.3] group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={compassIllustration}
            alt="compass illustration"
            priority
            className={cn(
              "absolute -bottom-2 -right-2 z-[1] scale-[1.5] grayscale-[0.9] transition-all duration-500",
              "group-hover:bottom-4 group-hover:right-4 group-hover:-rotate-6 group-hover:scale-[2] group-hover:grayscale-[0.4]",
            )}
          />
        </ServicesCard>

        <ServicesCard type="tour">
          <Image
            src={ticketIllustration}
            alt="ticket illustration"
            priority
            className={cn(
              "absolute -top-8 left-[45%] z-[2] scale-[1.2] grayscale-[0.9] transition-all duration-500",
              "group-hover:-top-6 group-hover:right-4 group-hover:rotate-3 group-hover:scale-[1.5] group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={mapIllustration}
            alt="map illustration"
            priority
            className={cn(
              "absolute -bottom-8 left-0 z-[1] rotate-12 grayscale-[0.9] transition-all duration-500",
              "group-hover:-bottom-2 group-hover:left-4 group-hover:rotate-6 group-hover:scale-125 group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={suitcaseIllustration}
            alt="suitcase illustration"
            priority
            className={cn(
              "absolute -bottom-12 left-[40%] z-[2] scale-[1] grayscale-[0.9] transition-all duration-500",
              "group-hover:-bottom-8 group-hover:left-[30%] group-hover:-rotate-3 group-hover:scale-[1] group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={beachIllustration}
            alt="beach illustration"
            priority
            className={cn(
              "absolute -right-2 bottom-0 z-[1] -rotate-12 scale-[1.25] grayscale-[0.9] transition-all duration-500",
              "group-hover:bottom-0 group-hover:right-4 group-hover:-rotate-6 group-hover:scale-[1.6] group-hover:grayscale-[0.4]",
            )}
          />
        </ServicesCard>

        <ServicesCard type="carter">
          <Image
            src={planeIllustration}
            alt="plane illustration"
            priority
            className={cn(
              "absolute -right-4 top-2 z-[1] rotate-[15deg] grayscale-[0.9] transition-all duration-1000",
              "group-hover:-top-6 group-hover:right-4 group-hover:scale-[1.25] group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={yellowCarIllustration}
            alt="yellow car illustration"
            priority
            className={cn(
              "absolute -bottom-2 left-20 z-[1] scale-x-[-1] grayscale-[0.9] transition-all duration-1000",
              "group-hover:-bottom-2 group-hover:left-40 group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={backpackIllustration}
            alt="backpack illustration"
            priority
            className={cn(
              "absolute -bottom-2 left-4 z-[1] grayscale-[0.9] transition-all duration-500",
              "group-hover:left-10 group-hover:rotate-12 group-hover:scale-[1.7] group-hover:grayscale-[0.4]",
            )}
          />

          <Image
            src={walletIllustration}
            alt="wallet illustration"
            priority
            className={cn(
              "absolute -bottom-2 left-6 z-[1] grayscale-[0.9] transition-all duration-500",
              "group-hover:bottom-2 group-hover:left-16 group-hover:-rotate-6 group-hover:scale-[1.3] group-hover:grayscale-[0.4]",
            )}
          />
        </ServicesCard>
      </div>
    </motion.div>
  );
};
