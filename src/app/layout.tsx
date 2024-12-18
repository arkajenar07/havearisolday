import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Raleway, Inter } from 'next/font/google'
import Head from "next/head";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

//👇 Import our second font

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-raleway',
})

//👇 Configure the object for our second font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Have a Risol Day!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link
  rel="icon"
  href="/risol.png"
  type="image/png"
  sizes="10"
/>
      </Head>
      <body
        className={`${raleway.variable} ${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}