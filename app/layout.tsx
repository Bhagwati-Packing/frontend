import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhagwati Packing",
  description: "Total Packaging Solutions since 2000",
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/image/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/image/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* NavBar included here so it's visible on all pages */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer included here so it's visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}