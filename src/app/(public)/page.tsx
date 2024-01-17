import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { getSystemConfig } from "@/data/app-system";

export default async function Home() {
  const systemConfig = await getSystemConfig();

  return (
    <main className="min-h-[calc(100dvh-4rem)]">
      <Hero />

      <About systemConfig={systemConfig} />
    </main>
  );
}
