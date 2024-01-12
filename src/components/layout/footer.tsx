import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import dayjs from "dayjs";

import ScrollToTopLogo from "../scroll-to-top-logo";
import { auth } from "@/auth";

const Footer = async () => {
  const session = await auth();
  return (
    <footer className="border-t border-t-neutral-200 bg-white text-sm dark:border-t-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-6">
        <div className="grid gap-8 md:grid-cols-[400px_1fr]">
          <div className="flex flex-col gap-4">
            <ScrollToTopLogo />

            <div className="flex flex-col items-start gap-1">
              <p>Jl. Margo Basuki Mulyoagung Kec. Dau Kab. Malang</p>

              <Link
                href="mailto:g19tourtravel@gmail.com"
                className="flex items-center gap-1 transition-colors hover:text-primary">
                <Mail className="text-xs" size={16} /> g19tourtravel@gmail.com
              </Link>

              <Link
                href="tel:+6281234567890"
                className="flex items-center gap-1 transition-colors hover:text-primary">
                <Phone className="text-xs" size={16} /> +62 812 3456 7890
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Layanan</h3>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/rental"
                  className="transition-colors hover:text-primary">
                  Rental Kendaraan
                </Link>
              </li>

              <li>
                <Link
                  href="/tour"
                  className="transition-colors hover:text-primary">
                  Tour
                </Link>
              </li>

              <li>
                <Link
                  href="/carter"
                  className="transition-colors hover:text-primary">
                  Carter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="flex gap-2 text-neutral-500">
          <span>© {dayjs().get("year")} G19 Tour & Travel</span>

          {!session && (
            <>
              <span>•</span>

              <Link
                href="/login"
                className="transition-all hover:text-neutral-900 hover:dark:text-neutral-50">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
