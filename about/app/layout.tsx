import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "About NexusAI - Our Mission & Team",
  description: "Learn about NexusAI's mission, values, and the team building the future of AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
