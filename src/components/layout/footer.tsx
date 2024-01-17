import Link from "next/link";
import dayjs from "dayjs";
import { Mail, Phone } from "lucide-react";

import { ScrollToTopLogo } from "../scroll-to-top-logo";
import { auth } from "@/auth";
import { getSystemConfig } from "@/data/app-system";

export const Footer = async () => {
  const session = await auth();

  const systemConfig = await getSystemConfig();

  return (
    <footer className="border-t border-t-neutral-200 bg-white dark:border-t-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <ScrollToTopLogo systemConfig={systemConfig} />

            <div className="flex flex-col items-start gap-2">
              <p>Jl. Margo Basuki Mulyoagung Kec. Dau Kab. Malang</p>

              <Link
                href="mailto:g19tourtravel@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail size={20} /> {systemConfig?.email}
              </Link>

              <Link
                href={`tel:+62${systemConfig?.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone size={20} /> +62 {systemConfig?.phone}
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
                  Rental
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

        <span className="flex gap-2 text-neutral-500">
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
        </span>
      </div>
    </footer>
  );
};
