import { Montserrat, Manrope, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.as-mama-said.com"),
  title: "As Mama Said — Mama said it. We made it.",
  description: "Well said, well made — a creative studio out of Cairo and Dubai.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "As Mama Said — Mama said it. We made it.",
    description: "Well said, well made — a creative studio out of Cairo and Dubai.",
    url: "https://www.as-mama-said.com",
    siteName: "As Mama Said",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "As Mama Said — Mama said it. We made it.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "As Mama Said — Mama said it. We made it.",
    description: "Well said, well made — a creative studio out of Cairo and Dubai.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${manrope.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
