import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlgebraTrust",
  description: "Milestone 0 demo shell for trustworthy algebra workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
