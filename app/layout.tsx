import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ClientThemeWrapper } from "@/components/client-theme-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshal Rane - Full-Stack Developer",
  description:
    "Personal portfolio of Harshal Rane, a passionate full-stack developer and UI/UX designer creating innovative digital solutions.",
  keywords:
    "full-stack developer, UI/UX designer, React, Next.js, TypeScript, web development, portfolio",
  authors: [{ name: "Harshal Rane" }],
  creator: "Harshal Rane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshalrane.dev",
    title: "Harshal Rane - Full-Stack Developer",
    description:
      "Personal portfolio of Harshal Rane, a passionate full-stack developer and UI/UX designer creating innovative digital solutions.",
    siteName: "Harshal Rane Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Rane - Full-Stack Developer",
    description:
      "Personal portfolio of Harshal Rane, a passionate full-stack developer and UI/UX designer creating innovative digital solutions.",
    creator: "@harshalrane",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ClientThemeWrapper>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
