import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { NavigationBar } from "@/components/layout/navigation-bar";

export default function NotFound() {
  return (
    <>
      <NavigationBar />
      <Container className="flex items-center justify-center">
        404 | This page could not be found.
      </Container>
      <Footer />
    </>
  );
}
