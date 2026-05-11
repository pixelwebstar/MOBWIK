import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Mobile & Tablet Repair | Mobile Wik",
  description: "Expert repair services for all mobile phones and tablets. Screen replacement, battery repair, and water damage recovery with premium quality and warranty.",
  keywords: ["mobile repair", "phone repair", "tablet repair", "screen replacement", "battery replacement", "iPhone repair", "Samsung repair"],
  openGraph: {
    title: "Premium Mobile & Tablet Repair | Mobile Wik",
    description: "Fast, professional repairs for all your devices. Same-day service available.",
    type: "website",
  }
};

import KeyboardNavigation from "@/components/KeyboardNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <KeyboardNavigation />
        {children}
      </body>
    </html>
  );
}


