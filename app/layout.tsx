import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Youssef Hassany - Frontend Developer | Portfolio",
    template: "%s | Youssef Hassany - Frontend Developer",
  },
  description:
    "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio of innovative web applications and get in touch.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Youssef Hassany", url: "https://your-domain.com" }],
  creator: "Youssef Hassany",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Youssef Hassany - Frontend Developer Portfolio",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Youssef Hassany Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Youssef Hassany - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Hassany - Frontend Developer Portfolio",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/images/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Youssef Hassany",
              jobTitle: "Frontend Developer",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors text-black dark:text-white">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
