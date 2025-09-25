import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "cloven.dev - Futuristic Web Development Agency",
  description: "Cutting-edge web development solutions for the modern digital landscape. We craft exceptional digital experiences with innovative technology.",
  keywords: "web development, digital agency, modern websites, futuristic design, cloven.dev",
  authors: [{ name: "cloven.dev" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
