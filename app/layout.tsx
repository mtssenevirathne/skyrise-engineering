import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://skyrise-engineering.vercel.app"
  ),

  title: {
    default: "Skyrise Engineering (Pvt) Ltd",
    template: "%s | Skyrise Engineering",
  },

  description:
    "Professional Civil Engineering, Construction, Property Development and Land Reclamation Solutions in Sri Lanka.",

  keywords: [
    "Skyrise Engineering",
    "Civil Engineering Sri Lanka",
    "Construction Company Sri Lanka",
    "Property Development",
    "Land Reclamation",
    "Engineering Solutions",
    "Infrastructure Development",
    "Civil Contractors Sri Lanka",
    "Engineering Company Sri Lanka",
  ],

  authors: [
    {
      name: "Skyrise Engineering (Pvt) Ltd",
    },
  ],

  creator: "Skyrise Engineering (Pvt) Ltd",

  verification: {
    google:
      "ua6G21YDbqN6Fsr5vgytZvorAg2fSlllwsJISe6FWYA",
  },

  openGraph: {
    title: "Skyrise Engineering (Pvt) Ltd",

    description:
      "Professional Civil Engineering, Construction, Property Development and Land Reclamation Solutions in Sri Lanka.",

    url: "https://skyrise-engineering.vercel.app",

    siteName: "Skyrise Engineering",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logobar.jpeg",
        width: 1200,
        height: 630,
        alt: "Skyrise Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Skyrise Engineering (Pvt) Ltd",

    description:
      "Professional Civil Engineering, Construction, Property Development and Land Reclamation Solutions in Sri Lanka.",

    images: ["/logobar.jpeg"],
  },

  icons: {
    icon: "/logobar.jpeg",
    shortcut: "/logobar.jpeg",
    apple: "/logobar.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}