import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myxellia",
  description: "The internet of Real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body
          className={`${inter.variable} ${playfair.variable} antialiased min-h-screen w-full max-w-full bg-mainBackground selection:bg-zinc-300 transition-colors duration-700 ease-in`}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
