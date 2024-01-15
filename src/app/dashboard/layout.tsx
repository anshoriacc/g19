import { PropsWithChildren } from "react";

import { FooterMinimal } from "@/components/layout/footer-minimal";
import { Sidebar } from "@/components/layout/sidebar";
import { NavigationBarDashboard } from "@/components/navigation-bar/navigation-bar-dashboard";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
      <Sidebar />

      <section>
        <NavigationBarDashboard />

        {children}

        <FooterMinimal className="mx-0 mr-auto" />
      </section>
    </section>
  );
}
