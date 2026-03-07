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
  title: "Cuplana – Helping Restaurants Increase Profit & Build Strong Food Brands",
  description:
    "Food & Restaurant Growth Specialist | 7+ Years Industry Experience",
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
