import { PropsWithChildren } from "react";

import { FooterMinimal } from "@/components/layout/footer-minimal";
import { Sidebar } from "@/components/layout/sidebar";
import { NavigationBarDashboard } from "@/components/navigation/navigation-bar-dashboard";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBarDashboard />

      <section className="mx-auto grid max-w-[1200px] md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
        <Sidebar />

        {children}
      </section>

      <FooterMinimal />
    </>
  );
}
