import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "As Mama Said — Coming Soon",
  description: "Mama said it. We made it. Coming soon.",
  openGraph: {
    title: "As Mama Said — Coming Soon",
    description: "Mama said it. We made it. Coming soon.",
    url: "https://www.as-mama-said.com",
    siteName: "As Mama Said",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "As Mama Said — Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "As Mama Said — Coming Soon",
    description: "Mama said it. We made it. Coming soon.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <ComingSoon />;
}
