import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/component/navbar";
import {Poppins} from "next/font/google";
import { ThemeProvider } from "@/app/component/theme-provider"
import { Analytics } from "@vercel/analytics/next"
const font = Poppins({
  subsets: ['latin'],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
})
export const metadata: Metadata = {
  title: "Aditya Raj",
  description: "FullStack Developer | AI Engineer",
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
            <Analytics/>
        <Navbar/>
        <main>
        {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
