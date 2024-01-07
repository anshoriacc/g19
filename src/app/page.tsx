import About from "@/components/pages/home/about";
import Hero from "@/components/pages/home/hero";
import Services from "@/components/pages/home/services";

export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-4rem)]">
      <Hero />

      <About />

      <Services />
    </main>
  );
}
