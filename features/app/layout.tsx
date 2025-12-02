import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NexusAI Features - Powerful AI Capabilities",
  description: "Discover the cutting-edge AI features that make NexusAI the most advanced artificial intelligence platform for modern businesses. From workflow automation to predictive analytics.",
  keywords: ["AI", "artificial intelligence", "automation", "NLP", "machine learning", "analytics"],
  authors: [{ name: "NexusAI" }],
  openGraph: {
    title: "NexusAI Features - Powerful AI Capabilities",
    description: "Discover the cutting-edge AI features that make NexusAI the most advanced artificial intelligence platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
