import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { ReduxProvider } from "@/redux/provider";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// Rubik font
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
});

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Kicks | The Ultimate Sneaker Store",
    template: "%s | Kicks",
  },
  description:
    "Discover the latest collection of premium sneakers at Kicks. Shop top brands, exclusive drops, and timeless classics. Your one-stop destination for footwear fashion.",
  applicationName: "Kicks Store",
  authors: [{ name: "Md Rakib Ali", url: "https://github.com/rakibislam2233" }],
  generator: "Next.js",
  keywords: [
    "Kicks",
    "Sneakers",
    "Footwear",
    "Shoes",
    "Online Store",
    "E-commerce",
    "Fashion",
    "Streetwear",
    "Running Shoes",
    "Basketball Shoes",
    "Casual Shoes",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Md Rakib Ali",
  publisher: "Md Rakib Ali",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kicks.vercel.app",
    siteName: "Kicks Store",
    title: "Kicks | The Ultimate Sneaker Store",
    description:
      "Discover the latest collection of premium sneakers at Kicks. Shop top brands, exclusive drops, and timeless classics.",
    images: [
      {
        url: "/og-image.jpg", // Ensure you have an og-image.jpg in public folder
        width: 1200,
        height: 630,
        alt: "Kicks Store Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kicks | The Ultimate Sneaker Store",
    description:
      "Discover the latest collection of premium sneakers at Kicks. Shop top brands, exclusive drops, and timeless classics.",
    images: ["/og-image.jpg"],
    creator: "@rakibislam2233",
  },
  alternates: {
    canonical: "https://kicks.vercel.app",
  },
};

import { Toaster } from "@/components/ui/sonner";

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.className} antialiased`}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
