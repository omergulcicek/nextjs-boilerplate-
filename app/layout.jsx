"use client"

import { RecoilRoot } from "recoil"
import { Inter } from "@next/font/google"

import { ThemeProvider } from "./themeProvider"
import { Header, Footer } from "@/components"
import "./globals.css"

const inter = Inter({
  weight: ["200", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>
      <html
        lang="tr"
        dir="ltr"
        className={inter.className}
        suppressHydrationWarning
      >
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body className="flex min-h-screen flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </RecoilRoot>
  )
}
