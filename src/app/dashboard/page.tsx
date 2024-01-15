import { auth } from "@/auth";
import { Container } from "@/components/layout/container";

export default async function DashboardPage() {
  const session = await auth();

  return <Container>Dashboard</Container>;
}
