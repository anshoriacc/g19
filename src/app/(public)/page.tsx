import { About } from "@/components/home/about";
import { Carousel } from "@/components/home/carousel";
import { getSystemConfig } from "@/data/app-system";

export default async function Home() {
  const systemConfig = await getSystemConfig();

  return (
    <main className="min-h-[calc(100dvh-4rem)]">
      <Carousel />

      <About systemConfig={systemConfig} />
    </main>
  );
}
