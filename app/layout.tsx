import type { Metadata } from "next";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

import {
  atypFont,
  garamondFont,
  utsahaFont,
  comfortaaFont,
} from "../lib/fonts";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Decentralized Identity Token",
  description: "Portable, Recoverable and Self-Sovereign Identity",
  icons: {
    icon: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${atypFont.variable} ${garamondFont.variable} ${utsahaFont.variable} ${comfortaaFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
