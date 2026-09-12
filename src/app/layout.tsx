import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Navbar } from "@/components/navbar";
import { AOSInit } from "@/components/ui/AOSInit";
import { Footer } from "@/components/ui/Footer";
import { QuickContact } from "@/components/ui/QuickContact";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Direct Impact Development Network",
  description:
    "Driving sustainable social impact across multiple Sustainable Development Goals (SDGs).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex w-full max-w-506 flex-col items-center justify-center overflow-x-hidden">
        <Providers>
          <QuickContact />
          <Navbar />
          {children}
          <Footer />
          <AOSInit />
        </Providers>
      </body>
    </html>
  );
}
