import { FooterMinimal } from "@/components/layout/footer-minimal";
import { NavigationBar } from "@/components/navigation-bar/navigation-bar";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />

      {children}

      <FooterMinimal />
    </>
  );
}
