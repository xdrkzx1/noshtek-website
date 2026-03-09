import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ui/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Noshtek | AI-Driven SAP Financial Transformation",
    template: "%s | Noshtek",
  },
  description:
    "Noshtek is a boutique SAP consulting firm specializing in AI-driven financial transformation for Utilities, Telecom, and Insurance industries.",
  keywords: [
    "SAP consulting",
    "S/4HANA Finance",
    "financial transformation",
    "SAP BRIM",
    "utilities SAP",
    "telecom SAP",
    "insurance SAP",
    "IFRS 17",
    "AI financial close",
  ],
  authors: [{ name: "Noshtek" }],
  creator: "Noshtek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noshtek.com",
    siteName: "Noshtek",
    title: "Noshtek | AI-Driven SAP Financial Transformation",
    description:
      "Premier SAP consulting partner for AI-driven financial transformation across Utilities, Telecom, and Insurance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noshtek - AI-Driven SAP Financial Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noshtek | AI-Driven SAP Financial Transformation",
    description:
      "Premier SAP consulting partner for AI-driven financial transformation.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
