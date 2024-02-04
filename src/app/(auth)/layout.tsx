import { PropsWithChildren, Suspense } from "react";
import { Metadata } from "next";

import { FooterMinimal } from "@/components/layout/footer-minimal";
import { NavigationBar } from "@/components/layout/navigation-bar";
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

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />

      {children}

      <Suspense>
        <FooterMinimal />
      </Suspense>
    </>
  );
}
