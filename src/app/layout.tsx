import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/pages/Home";
import Landing from "@/pages/Landing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Register-karo - Your Trusted Registration Partner",
  description: "Register-karo provides hassle-free registration services for businesses and individuals. Get expert assistance with company registration, compliance, and more.",
  openGraph: {
    title: "Register-karo - Your Trusted Registration Partner",
    description: "Register-karo offers seamless registration services for businesses and individuals. Expert help with company registration, compliance, and more.",
    url: "https://www.register-karo.com",
    siteName: "Register-karo",
    images: [
      {
        url: "https://www.register-karo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Register-karo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@registerkaro",
    title: "Register-karo - Your Trusted Registration Partner",
    description: "Register-karo offers comprehensive registration services. Expert support for company registration, compliance, and more."
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "company registration, business registration, compliance, registration services, Register-karo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Landing /> */}
        <Home />
        {children}
      </body>
    </html>
  );
}
