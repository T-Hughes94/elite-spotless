import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Spotless Cleaning",
  description: "Cleaning Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

