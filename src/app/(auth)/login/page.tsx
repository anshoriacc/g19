import { Metadata } from "next";

import { LoginForm } from "@/components/auth/login-form";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <Container className="h-[calc(100dvh-131px)] flex items-center justify-center">
      <LoginForm />
    </Container>
  );
}
