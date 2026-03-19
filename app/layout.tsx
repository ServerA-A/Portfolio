import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/app/component/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const font = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: [
    "200", "300", "400", "500", "600", "700", "800"
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
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
