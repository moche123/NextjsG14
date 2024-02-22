import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { routes } from "@/static/routes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title 2",
  description: "Nextjs in Ceti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4">
          <Navigation routes={routes} />
        </div>
        <div className="container md:px-12 lg:px-24">{children}</div>
      </body>
    </html>
  );
}
