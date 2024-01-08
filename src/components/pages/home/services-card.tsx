import { cn } from "@/utils";
import Link from "next/link";

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

type Props = { type: keyof typeof services };

const ServicesCard = ({ type }: Props) => {
  return (
    <Link
      href={`/${type}`}
      passHref
      className={cn(
        "aspect-[4/3] w-[368px] rounded-2xl border border-neutral-200 bg-white hover:border-2 hover:border-primary dark:border-neutral-800 dark:bg-neutral-950",
        "group relative overflow-hidden",
      )}>
      <h3
        className={cn(
          "bg-gradient-to-b from-neutral-900 from-60% bg-clip-text text-3xl font-bold text-transparent group-hover:text-2xl dark:from-neutral-50",
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-2 transition-all duration-500 group-hover:left-8 group-hover:top-8 group-hover:translate-x-0 group-hover:translate-y-0",
        )}>
        {services[type].title}
      </h3>

      <p className="absolute left-8 top-16 w-[304px] translate-x-10 translate-y-10 text-neutral-500 opacity-0 transition-all delay-200 duration-200 group-hover:visible group-hover:top-16 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
        {services[type].description}
      </p>
    </Link>
  );
};

export default ServicesCard;
