import { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import patternFull from "@/assets/images/pattern-full.svg";

const services = {
  rental: {
    title: "Rental",
    description:
      "Kami menyediakan armada yang berkualitas, bersih, dan nyaman untuk kebutuhan berlibur anda.",
  },
  tour: {
    title: "Tour",
    description:
      "Kami menyediakan paket trip wisata yang menarik dan menyenangkan untuk anda.",
  },
  carter: {
    title: "Carter",
    description:
      "Kami menyediakan layanan antar-jemput dengan berbagai destinasi di sekitar wilayah Malang Raya.",
  },
};

type Props = PropsWithChildren<{ type: keyof typeof services }>;

const ServicesCard = ({ type, children }: Props) => {
  return (
    <Link
      href={`/${type}`}
      passHref
      className={cn(
        "aspect-[4/3] w-[368px] rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
        "group relative box-border overflow-hidden",
      )}>
      <h3
        className={cn(
          "bg-gradient-to-b from-neutral-900 from-60% bg-clip-text font-bold text-transparent text-4xl group-hover:text-3xl dark:from-neutral-50",
          "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 gap-2 transition-all duration-500 group-hover:left-8 group-hover:top-8 group-hover:translate-x-0 group-hover:translate-y-0",
        )}>
        {services[type].title}
      </h3>

      <p className="absolute left-8 top-16 z-10 w-[304px] translate-x-10 translate-y-10 text-neutral-500 opacity-0 transition-all delay-200 duration-200 group-hover:visible group-hover:top-16 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
        {services[type].description}
      </p>

      {children}

      <Image
        src={patternFull}
        alt="pattern"
        priority
        width={480}
        height={480}
        className="absolute left-1/2 top-1/2 z-[0] aspect-square -translate-x-1/2 -translate-y-1/2 -rotate-6 scale-[1.2] opacity-5 grayscale transition-all duration-500 group-hover:-rotate-12 group-hover:scale-[2] dark:invert"
      />
    </Link>
  );
};

export default ServicesCard;
