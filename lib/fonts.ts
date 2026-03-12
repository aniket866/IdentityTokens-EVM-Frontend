import localFont from "next/font/local";
import { Comfortaa } from "next/font/google";

export const atypFont = localFont({
  src: [
    {
      path: "../public/fonts/AtypDisplayTRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-atyp",
  display: "swap",
});

export const garamondFont = localFont({
  src: [
    {
      path: "../public/fonts/Garamond.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-garamond",
  display: "swap",
});

export const utsahaFont = localFont({
  src: [
    {
      path: "../public/fonts/UtSaHaGumm.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-utsaha",
  display: "swap",
});

export const comfortaaFont = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});
