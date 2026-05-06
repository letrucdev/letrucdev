import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "letrucdev — Full-Stack Developer",
  description:
    "Full-Stack Developer based in Hoan Kiem, Vietnam. Building CRM systems for 5K–10K users with Next.js, NestJS, Laravel, and .NET Core.",
  openGraph: {
    title: "letrucdev — Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable CRM systems for 10K+ users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-body font-sans" suppressHydrationWarning >
        {children}
      </body>
    </html>
  );
}
