import { PropsWithChildren } from "react";

import NavigationBar from "./navigation-bar";
import Footer from "./footer";

export default function RootLayoutProvider({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
