import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { BackToTop } from "@/components/layout/BackToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.brand} Technologies | ${SITE.slogan}`,
  description:
    "TRIVEX builds intelligent digital solutions in Software, Cloud & AI that empower businesses to innovate, scale, and grow without limits.",
  keywords: [
    "software development",
    "cloud architecture",
    "AI solutions",
    "DevOps",
    "web development",
    "mobile apps",
    "TRIVEX",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.brand} Technologies`,
    description: SITE.slogan,
    type: "website",
  },
  icons: {
    icon: "/images/trivex-logo.png",
    apple: "/images/trivex-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <AppProviders>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </AppProviders>
      </body>
    </html>
  );
}
