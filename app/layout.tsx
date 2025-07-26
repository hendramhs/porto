import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Hendra Darmawan - Portfolio",
  description:
    "Portfolio website Hendra Darmawan - Mahasiswa dan Web Developer",
  keywords: "Hendra Darmawan, portfolio, web developer, mahasiswa, projects",
  authors: [{ name: "Hendra Darmawan" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
