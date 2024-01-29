import { About } from "@/components/home/about";
import { Carousel } from "@/components/home/carousel";
import { getSystemConfig } from "@/data/app-system";
import { getBannerList } from "@/data/banner";

export default async function Home() {
  const systemConfig = await getSystemConfig();
  const bannerList = await getBannerList("displayed");

  return (
    <main className="min-h-[calc(100dvh-4rem)]">
      <Carousel images={bannerList} />

      <About systemConfig={systemConfig} />
    </main>
  );
}
