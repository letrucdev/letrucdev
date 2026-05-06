import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

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

const siteName = `${profile.fullName} — ${profile.role}`;
const titleDefault = `${profile.name} — ${profile.role}`;
const description =
  "Le Truc (letrucdev) — Full-Stack Developer based in Hoan Kiem, Vietnam. Building scalable CRM systems for 5K–10K users with Next.js, NestJS, Laravel, and .NET Core.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: titleDefault,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "letrucdev",
    "Le Truc",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "NestJS",
    "Laravel",
    ".NET Core",
    "TypeScript",
    "CRM Systems",
    "Vietnam Developer",
    "Hoan Kiem",
    "Portfolio",
  ],
  authors: [{ name: profile.fullName, url: profile.siteUrl }],
  creator: profile.fullName,
  publisher: profile.fullName,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName,
    title: titleDefault,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    creator: `@${profile.name}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1b26" },
  ],
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  description,
  image: `${profile.siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hoan Kiem",
    addressCountry: "VN",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Laravel",
    ".NET Core",
    "MySQL",
    "Redis",
    "Docker",
    "CRM Systems",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: profile.siteUrl,
  inLanguage: "en",
  author: { "@type": "Person", name: profile.fullName },
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
      <body
        className="min-h-full flex flex-col bg-canvas text-body font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
