import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentPort Skills Passport™ - Instant Workforce Verification",
  description: "Real-time skill verification that proves borrowed talent can contribute on Day 1, not Week 3",
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