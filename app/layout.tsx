import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowAI - Work Smarter, Not Harder",
  description: "Stop wasting time on repetitive tasks. FlowAI learns your workflow and handles the boring stuff so you can focus on what matters.",
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

