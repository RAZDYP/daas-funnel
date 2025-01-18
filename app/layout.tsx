import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';


const openSauceSansMedium = localFont({
  src: '../fonts/font-openSauceSans-Medium.ttf',
  variable: '--font-openSauce-medium',
});

const openSauceSansRegular = localFont({
  src: '../fonts/font-openSauceSans-Regular.ttf',
  variable: '--font-openSauce-regular',
});

const openSauceSansSemibold = localFont({
  src: '../fonts/font-openSauceSans-Semibold.ttf',
  variable: '--font-openSauce-semibold',
});


export const metadata: Metadata = {
  title: "DaaS Funnel",
  description: "workwithdaas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  bg-white text-black ${openSauceSansMedium.variable} ${openSauceSansRegular.variable} ${openSauceSansSemibold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
