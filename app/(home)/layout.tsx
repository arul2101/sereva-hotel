import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { roboto } from "@/fonts/index";

export const metadata: Metadata = {
  title: "Sereva Hotel",
  description: "Secure your dream vacation with a reservation!",
};

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