// app/layout.tsx
import type { Metadata } from "next";
// --- FINAL FIX ---
// Import directly from the 'geist' package
import { GeistSans, GeistMono } from "geist/font";
// --- FINAL FIX ---

// @ts-ignore: TypeScript cannot find module/type declarations for side-effect import of CSS
import "./globals.css";

// 1. Assign the imported fonts to variables
const geistSans = GeistSans;
const geistMono = GeistMono;

// ... (rest of the layout code remains the same)
export const metadata: Metadata = {
  title: "NGALI Mining | Executive Portal",
  description:
    "Managing Director Operations and Executive Portal built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
