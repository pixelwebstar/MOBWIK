import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import FloatingContact from "@/components/FloatingContact";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Mobile & Tablet Repair | Mobwik",
  description: "Expert repair services for all mobile phones and tablets. Screen replacement, battery repair, and water damage recovery with premium quality and warranty.",
  keywords: ["mobile repair", "phone repair", "tablet repair", "screen replacement", "battery replacement", "iPhone repair", "Samsung repair"],
  openGraph: {
    title: "Premium Mobile & Tablet Repair | Mobwik",
    description: "Fast, professional repairs for all your devices. Same-day service available.",
    type: "website",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Mobwik",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: "/branding/favicon-96x96.png",
    apple: "/branding/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans select-none" suppressHydrationWarning>
        <KeyboardNavigation />
        {children}
        <FloatingContact />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
