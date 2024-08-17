import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
</style>
const inter = Inter({ subsets: ["latin"], display: "swap", weight: "400" });

export const metadata: Metadata = {
  title: "Welcome - from Mamun Hossain",
  description: "This website is creating in nextjs, typeScript, nodejs etc",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <ThemeProvider>

        <body className={inter.className}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
