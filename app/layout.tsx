import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tamarah Waritimi | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node, MySQL. I build scalable web applications and modern SaaS platforms. View projects and hire me.",

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MySQL",
    "Software Engineer",
  ],

  icons: {
    icon: "/tamarah-favicon.png",
  },

  openGraph: {
    title: "Tamarah Waritimi | Full Stack Developer",

    description:
      "Portfolio of a Full Stack Developer building scalable web apps.",
    url: "https://yourdomain.com",
    siteName: "Tamarah Portfolio",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen bg-black text-white">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
