import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EmotionProvider from "../components/EmotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bremdfam's Website",
  description: "A website dedicated to the portfolio of Bremdfam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <EmotionProvider>
          {children}
        </EmotionProvider>
      </body>
    </html>
  );
}
