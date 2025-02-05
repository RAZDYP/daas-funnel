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
  description: "workwithdaas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DaaS | Developer(s) as a Service</title>
      </head>
      <body
        className={`antialiased font-openSauceSansMedium font-light  bg-white text-[#1c2d68] ${openSauceSansMedium.variable} ${openSauceSansRegular.variable} ${openSauceSansSemibold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
