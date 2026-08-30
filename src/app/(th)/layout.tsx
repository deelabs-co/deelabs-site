import type { Metadata } from "next";
import { Shell, fontVariables } from "@/components/SiteShell";
import { th } from "@/content/th";

export const metadata: Metadata = {
  description: th.home.sub,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={fontVariables}>
      <body>
        <Shell locale="th">{children}</Shell>
      </body>
    </html>
  );
}
