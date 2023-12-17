import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import dayjs from "dayjs";

import g19logo from "@/assets/g19.svg";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[400px_1fr] gap-4 px-[5%] py-6">
        <div className="flex flex-col gap-4">
          <Image src={g19logo} alt="G19 logo" height={32} draggable={false} />

          <div className="flex flex-col items-start">
            <p>Jl. Margo Basuki Mulyoagung Kec. Dau Kab. Malang</p>

            <Link
              href="mailto:g19tourtravel@gmail.com"
              className="flex items-center gap-1 hover:text-primary">
              <Mail className="text-xs" size={16} /> g19tourtravel@gmail.com
            </Link>

            <Link
              href="tel:+6281234567890"
              className="flex items-center gap-1 hover:text-primary">
              <Phone className="text-xs" size={16} /> +62 812 3456 7890
            </Link>
          </div>

          <p className="text-neutral-500">
            © {dayjs().get("year")} G19 Tour & Travel
          </p>
        </div>
      </div>
    </footer>
  );
}
