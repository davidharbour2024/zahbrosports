import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimationProvider } from "@/components/ui/animation-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const isStaging = process.env.NEXT_PUBLIC_STAGING !== "false";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://staging.example.com"),
  title: { default: "Zahbro Sports — Built to Go the Distance", template: "%s | Zahbro Sports" },
  description: "Premium combat sports equipment for athletes who refuse to settle.",
  robots: isStaging ? { index: false, follow: false, nocache: true } : { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${oswald.variable}`}><body><AnimationProvider><Header />{children}<Footer /></AnimationProvider></body></html>;
}
