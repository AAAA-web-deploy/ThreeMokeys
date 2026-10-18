import type { Metadata, Viewport } from "next";
import { Bowlby_One_SC, DM_Sans } from "next/font/google";
import { site } from "@/config/site";
import Analytics from "@/components/Analytics";
import "./globals.css";

const display = Bowlby_One_SC({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ weight: ["500", "600", "700", "800"], subsets: ["latin"], variable: "--font-body" });

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || site.websiteUrl || "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: `${site.brand} — 3 Monkeys on ETH 4 FUN.`,
  description: "3 MONKEYS ON ETH 4 FUN. See no FUD. Hear no FUD. Speak no alpha. Just monkey business.",
  applicationName: site.tokenName,
  icons: { icon: site.branding.favicon, apple: "/branding/apple-touch-icon.png" },
  openGraph: {
    title: `${site.brand} — 3 Monkeys on ETH 4 FUN.`,
    description: "See no FUD. Hear no FUD. Speak no alpha.",
    images: [site.branding.ogImage],
    type: "website",
    url: site.websiteUrl || undefined,
  },
  twitter: { card: "summary_large_image", title: `${site.brand} — 3 Monkeys on ETH 4 FUN.`, description: "See no FUD. Hear no FUD. Speak no alpha." },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F3BA2F" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
