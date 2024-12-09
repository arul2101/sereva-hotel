import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Severa Hotel",
  description: "Secure your dream vacation with a reservation!",
};

const roboto = Roboto({
  weight: ["400", "500", "700", '300'],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
