import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethereal Data Services | Stay Connected, Effortlessly",
  description: "Request MTN, Airtel, Glo, and 9mobile data bundles through Ethereal Data Services in Port Harcourt, Nigeria.",
  openGraph: {
    title: "Ethereal Data Services | Stay Connected, Effortlessly",
    description: "Request MTN, Airtel, Glo, and 9mobile data bundles through Ethereal Data Services in Port Harcourt, Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};
export const viewport: Viewport = { themeColor: "#FAF7F0", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
