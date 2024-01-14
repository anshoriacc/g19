import { PropsWithChildren } from "react";

import { NavigationBar } from "@/components/navigation-bar/navigation-bar";
import { Footer } from "@/components/layout/footer";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />

      {children}

      <Footer />
    </>
  );
}
