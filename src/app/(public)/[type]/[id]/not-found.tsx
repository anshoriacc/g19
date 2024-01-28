import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { NavigationBar } from "@/components/navigation/navigation-bar";

export default function NotFound() {
  return (
    <Container className="flex items-center justify-center">
      404 | This page could not be found.
    </Container>
  );
}
