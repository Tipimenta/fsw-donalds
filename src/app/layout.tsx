import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { CardProvider } from "./[slug]/menu/contexts/card";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FSW",
  description: "App restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`} >
        <CardProvider>
        {children}
        </CardProvider>
      </body>
    </html>
  );
}
