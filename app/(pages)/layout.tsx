import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/common/Navbar";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wyn Dental Wellness",
  description: "Wyn Dental Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
