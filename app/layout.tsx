import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/navbar/ResponsiveNav";

export const metadata: Metadata = {
  title: "425 ОШП Скала",
  description: "Збройні сили України",
  openGraph: {
    title: "425 ОШП Скала",
    description: "Збройні сили України",
    images: ["/soc.png"],
    url: "https://ohb.vercel.app/",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
