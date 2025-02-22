import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatPDF",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen h-screen flex flex-col relative"
        )}
      >
        <ClerkProvider>
          <ClerkLoaded>

            <Header />
            {children}
          </ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
