import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorFlare from "@/components/CursorFlare";
import InteractiveGrid from "@/components/InteractiveGrid";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "RJ Dev Portfolio",
  description: "Portfolio of Rahul Jadhav, Senior Software Engineer specializing in backend systems, Kafka, and distributed architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-[#1a1a2e] selection:bg-neon-purple selection:text-white`}>
        <InteractiveGrid />
        <CursorFlare />
        {children}
      </body>
    </html>
  );
}
