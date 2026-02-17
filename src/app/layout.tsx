import type { Metadata } from "next";
import { Aref_Ruqaa, Spectral, Azeret_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import CartOverlay from "@/components/CartOverlay";

const display = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const interfaceFont = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-interface",
});

const detail = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-detail",
});

export const metadata: Metadata = {
  title: "DRMA | Designing Resourceful Modest Attire",
  description: "Affordable modest clothing with an ethical heart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${interfaceFont.variable} ${detail.variable} font-interface bg-drma-cream text-drma-charcoal antialiased`} suppressHydrationWarning>
        <CartProvider>
          {children}
          <CartOverlay />
        </CartProvider>
      </body>
    </html>
  );
}
