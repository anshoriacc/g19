import { PropsWithChildren, Suspense } from "react";

import { NavigationBar } from "@/components/layout/navigation-bar";
import { Footer } from "@/components/layout/footer";

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
