import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import RootLayoutProvider from "@/components/layout/root-layout-provider";
import { cn } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | G19 Tour & Travel",
    default: "G19 Tour & Travel",
  },
  description: "G19 Tour & Travel website",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50",
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <RootLayoutProvider>{children}</RootLayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
