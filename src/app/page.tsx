import About from "@/components/pages/home/about";
import Hero from "@/components/pages/home/hero";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-neutral-50 dark:bg-neutral-900">
      <Hero />
      <About />
    </main>
  );
}
