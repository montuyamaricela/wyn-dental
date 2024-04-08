import type { Metadata } from "next";
import { Inter, Alegreya_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "../components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });
const AlegreyaSans = Alegreya_Sans({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wyn Dental Clinic",
  description: "Wyn Dental Clinic",
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
      </body>
    </html>
  );
}
