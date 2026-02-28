import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Presshop News",
  description: "News Aggregator Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <Providers><main className="full">{children}</main></Providers>
        <Footer />
      </body>
    </html>
  );
}
