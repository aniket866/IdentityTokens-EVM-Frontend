import type { Metadata } from "next";
import "./globals.css";
import { atypFont, garamondFont, utsahaFont } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Decentralized Identity Token",
  icons: {
    icon: "/assets/logo.svg",
  },
  description: "Portable, Recoverable and Self-Sovereign Identity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${atypFont.variable} ${garamondFont.variable} ${utsahaFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
