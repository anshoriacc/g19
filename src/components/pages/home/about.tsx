import { cn } from "@/utils";
import { Kanit } from "next/font/google";

const kanit = Kanit({ weight: ["700"] });

export default function About() {
  return (
    <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-[1200px] space-y-4 bg-neutral-50 px-4 py-6 dark:bg-neutral-900">
      <h1
        className={cn(
          kanit.className,
          "self-center text-center text-3xl md:text-4xl",
        )}>
        G19 Tour & Travel
      </h1>

      <p className="text-justify">
        G19 Tour & Travel menawarkan pengalaman rental kendaraan dan perjalanan
        wisata yang tak terlupakan. Dengan armada kendaraan berkualitas dan
        paket wisata menarik, kami hadir untuk memenuhi kebutuhan perjalanan
        anda.
      </p>
    </div>
  );
}
