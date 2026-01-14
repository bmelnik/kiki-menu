import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Drinks | Restaurant | Bar | Petah Tikva - Kiki",
  description: "We have a wide selection of beers, wines and spirits. Ask about our cocktails!!",
  icons: {
    icon: "/kiki-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
