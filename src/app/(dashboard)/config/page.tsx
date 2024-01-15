import { Metadata } from "next";

import { auth } from "@/auth";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Konfigurasi",
};

export default async function ConfigPage() {
  const session = await auth();

  return <Container className="mx-0">Konfigurasi</Container>;
}
