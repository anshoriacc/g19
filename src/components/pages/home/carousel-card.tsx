"use client";

import { useId } from "react";

import car from "@/assets/images/car.avif";
import Image from "next/image";

export default function CarouselCard() {
  const id = useId();

  return (
    <div className="flex aspect-[3] items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-white duration-300 dark:border-neutral-800 dark:bg-neutral-950">
      {/* card {id} */}
      {/* <Image src={car} width={1200} height={400} alt="car" /> */}
    </div>
  );
}
