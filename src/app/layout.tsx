import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { getSystemConfig } from "@/data/app-system";

const inter = Inter({ subsets: ["latin"] });

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

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <html lang="id">
      <body
        className={cn(
          inter.className,
          "bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50",
        )}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
