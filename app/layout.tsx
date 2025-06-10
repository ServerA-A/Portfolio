import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/navbar";
import {Poppins} from "next/font/google";
import { ThemeProvider } from "@/component/theme-provider"

const font = Poppins({
  subsets: ['latin'],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
})
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        <main>
        {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
