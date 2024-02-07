import { Metadata } from "next";
import { Kanit } from "next/font/google";

import { auth } from "@/auth";
import { Container } from "@/components/layout/container";
import { getSystemConfig } from "@/data/app-system";
import { cn } from "@/lib/utils";
import { ConfigForm } from "@/components/dashboard/config/config-form";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Konfigurasi",
};

export default async function ConfigPage() {
  const session = await auth();

  const systemConfig = await getSystemConfig();

  return (
    <Container className="mx-0 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Konfigurasi</h1>

        <ConfigForm systemConfig={systemConfig} />
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="font-semibold">Nama</label>
          <h2
            className={cn(
              kanit.className,
              "self-center bg-gradient-to-b from-neutral-900 from-60% to-neutral-500 bg-clip-text text-3xl text-transparent dark:from-neutral-50 md:text-4xl",
            )}>
            {systemConfig?.title ?? "G19 Tour & Travel"}
          </h2>
        </div>

        <div>
          <label className="font-semibold">Logo teks</label>
          <h2
            className={cn(
              "select-none text-5xl font-bold",
              "bg-gradient-to-b from-primary from-60% bg-clip-text text-transparent",
            )}>
            <span className={kanit.className}>
              {systemConfig?.logoTitle ?? "G19"}
            </span>
          </h2>
        </div>

        <div>
          <label className="font-semibold">Nomor telepon</label>
          <p className="text-neutral-500">+62 {systemConfig?.phone}</p>
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <p className="text-neutral-500">{systemConfig?.email}</p>
        </div>

        <div>
          <label className="font-semibold">Alamat</label>
          <p className="text-neutral-500">{systemConfig?.address}</p>
        </div>

        <div>
          <label className="font-semibold">Deskripsi</label>
          <p className="text-neutral-500">{systemConfig?.description}</p>
        </div>
      </section>
    </Container>
  );
}
