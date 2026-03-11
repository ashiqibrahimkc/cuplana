import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Sali Chef – Cuplana | Professional Food & Restaurant Consulting",
description:
  "Cuplana by Sali Chef helps restaurants launch, optimize, and scale with expert consulting in menu design, kitchen systems, staff training, and food business strategy.",
keywords: [
    "restaurant consulting",
    "food consulting",
    "chef consulting",
    "restaurant startup help",
  ],
  authors: [{ name: "Sali Chef" }],
  creator: "Sali Chef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
