import { Metadata } from "next";

import { auth } from "@/auth";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Banner",
};

export default async function BannerPage() {
  const session = await auth();

  return <Container className="mx-0">Banner</Container>;
}
