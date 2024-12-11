import type { Metadata } from "next";
import "@/app/globals.css";
import { roboto } from "@/fonts/index";
import LogoBrand from "@/components/LogoBrand";

import BurgersMenu from "@/components/BurgersMenu";
import Footer from "@/components/LandingPage/Footer/Footer";

export const metadata: Metadata = {
  title: "Sereva Hotel",
  description: "Secure your dream vacation with a reservation!",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <header className="px-4 py-2">
          <div className="max-w-[1712px] mx-auto flex justify-between items-center">
            <LogoBrand />

            <BurgersMenu hidden={false} />
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
