import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Sejukin",
  description: "Next gen cold storage solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${bricolageGrotesque.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
