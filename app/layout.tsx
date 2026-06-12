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
  title: "Skyrise Engineering (Pvt) Ltd",
  description:
    "Professional Civil Engineering, Construction, Property Development and Land Reclamation Solutions in Sri Lanka.",

  keywords: [
    "Skyrise Engineering",
    "Civil Engineering",
    "Construction Company Sri Lanka",
    "Property Development",
    "Land Reclamation",
    "Engineering Solutions",
    "Infrastructure Development",
  ],

  authors: [
    {
      name: "Skyrise Engineering (Pvt) Ltd",
    },
  ],

  creator: "Skyrise Engineering (Pvt) Ltd",

  openGraph: {
    title: "Skyrise Engineering (Pvt) Ltd",
    description:
      "Professional Civil Engineering, Construction, Property Development and Land Reclamation Solutions in Sri Lanka.",
    type: "website",
    siteName: "Skyrise Engineering",
    locale: "en_US",
  },

  icons: {
    icon: "/logobar.jpeg",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}