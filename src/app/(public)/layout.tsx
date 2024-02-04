import { PropsWithChildren, Suspense } from "react";
import { Metadata } from "next";

import { NavigationBar } from "@/components/layout/navigation-bar";
import { Footer } from "@/components/layout/footer";
import { getSystemConfig } from "@/data/app-system";

export async function generateMetadata(): Promise<Metadata> {
  const systemConfig = await getSystemConfig();

  return {
    title: {
      template: `%s – ${systemConfig?.title ?? "G19 Tour & Travel"}`,
      default: systemConfig?.title ?? "G19 Tour & Travel",
    },
    description: systemConfig?.description ?? "G19 Tour & Travel website",
  };
}

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />

      {children}

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
