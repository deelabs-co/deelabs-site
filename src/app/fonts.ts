import { Anuphan, IBM_Plex_Mono } from "next/font/google";

// Thai-native pairing per design.md: Anuphan (display/body) + IBM Plex Mono (data/labels).
// If the font fetch fails at build time, the CSS fallback stack in globals.css applies.
export const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
