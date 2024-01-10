import LoginForm from "@/components/auth/login-form";
import Container from "@/components/layout/container";

export default function LoginPage() {
  return (
    <Container className="flex items-center justify-center">
      <LoginForm />
    </Container>
  );
}
