import { PropsWithChildren, Suspense } from "react";
import { Metadata } from "next";

import { FooterMinimal } from "@/components/layout/footer-minimal";
import { Sidebar } from "@/components/layout/sidebar";
import { NavigationBarDashboard } from "@/components/navigation/navigation-bar-dashboard";
import { getSystemConfig } from "@/data/app-system";

export async function generateMetadata(): Promise<Metadata> {
  const systemConfig = await getSystemConfig();

  return {
    title: {
      template: `%s | Dashboard – ${systemConfig?.title ?? "G19 Tour & Travel"}`,
      default: `Dashboard – ${systemConfig?.title ?? "G19 Tour & Travel"}`,
    },
  };
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBarDashboard />

      <section className="mx-auto grid max-w-[1200px] md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
        <Sidebar />

        {children}
      </section>

      <Suspense>
        <FooterMinimal />
      </Suspense>
    </>
  );
}
