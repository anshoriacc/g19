import { Metadata } from "next";

import { auth } from "@/auth";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();

  return <Container className="mx-0">Dashboard</Container>;
}
