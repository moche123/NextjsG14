import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About this page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-3 bg-blue-950 text-white">{children}</div>;
}
