import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PAYTRIX — Trust infrastructure for autonomous commerce",
  description:
    "PAYTRIX is the safety layer between AI intent and real-world money. Let an agent shop for you, on the rules you set.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plexMono.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
