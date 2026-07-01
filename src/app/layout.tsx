import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/Navbar";
import { SitePreferencesProvider } from "@/components/layout/site-preferences-provider";
import { TopUtilityBar } from "@/components/layout/TopUtilityBar";
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
  title: "Facturance | International ERP and invoicing platform",
  description:
    "Facturance is a modern SaaS platform for invoices, companies, roles, permissions, and offline-ready business operations.",
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
      <body className="flex min-h-full flex-col bg-[#f7f9fc] text-zinc-950">
        <SitePreferencesProvider>
          <TopUtilityBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
