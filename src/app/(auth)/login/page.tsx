import LoginForm from "@/components/auth/login-form";
import Container from "@/components/layout/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Container className="flex items-center justify-center">
      <Card className="w-full max-w-[400px] rounded-2xl">
        <CardHeader>
          <CardTitle>Masuk</CardTitle>

          <CardDescription>
            Untuk mendapatkan akses sebagai administrator.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </Container>
  );
}
