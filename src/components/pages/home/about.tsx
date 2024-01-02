import { Kanit } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import Map from "./map";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

export default function About() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-4 bg-neutral-50 px-4 py-6 dark:bg-neutral-900">
      <h1
        className={cn(
          kanit.className,
          "self-center text-center text-3xl md:text-4xl",
        )}>
        G19 Tour & Travel
      </h1>

      <div className="flex flex-col justify-center gap-6 md:flex-row">
        <Map />

        <div className="flex flex-1 flex-col space-y-4">
          <p className="text-justify">
            G19 Tour & Travel menawarkan pengalaman rental kendaraan dan
            perjalanan wisata yang tak terlupakan. Dengan armada kendaraan
            berkualitas dan paket wisata menarik, kami hadir untuk memenuhi
            kebutuhan perjalanan anda.
          </p>

          <Button className="self-end md:self-start">Hubungi Kami</Button>
        </div>
      </div>
    </div>
  );
}
