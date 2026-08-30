import type { Metadata } from "next";
import { Shell, fontVariables } from "@/components/SiteShell";
import { en } from "@/content/en";

export const metadata: Metadata = {
  description: en.home.sub,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <Shell locale="en">{children}</Shell>
      </body>
    </html>
  );
}
