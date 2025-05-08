import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// LINE Seed JPフォントの設定
const lineSeedJP = localFont({
  src: [
    {
      path: '../fonts/LINESeedJP_OTF_Rg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedJP_OTF_Bd.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-line-seed-jp',
});

export const metadata: Metadata = {
  title: "minimalist30",
  description: "Minimalist30のポートフォリオサイトです！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lineSeedJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
