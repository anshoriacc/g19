import { PropsWithChildren, Suspense } from "react";

import { FooterMinimal } from "@/components/layout/footer-minimal";
import { NavigationBar } from "@/components/navigation/navigation-bar";

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
