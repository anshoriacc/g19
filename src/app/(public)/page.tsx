import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-4rem)]">
      <Hero />

      <About />
    </main>
  );
}
