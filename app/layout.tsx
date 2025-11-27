import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechHub - Premium Electronics at Unbeatable Prices",
  description: "Shop authentic smartphones, headphones, smartwatches & more. 100% original products with warranty. Free 24-hour delivery. 50,000+ happy customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

