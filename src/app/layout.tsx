import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "@/app/components/Header/Navbar";
import "./globals.css";

const latoFont = Lato({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameOtivity",
  description:
    "Gameotivity offers a mobile app for gamers called the Gameotivity app. Our goal is to create a world-class mobile app platform and ecosystem that breaks the current distribution monopoly by giving game creators and gamers new options. Gamers can play any game easily through this app without paying any charges. This app will track the timing of players and calculate their g points. Rewards will provide according to time play and g points.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={latoFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
