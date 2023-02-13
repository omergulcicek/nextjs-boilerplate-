import { Inter } from "@next/font/google"
import "./globals.css"

const inter = Inter({
  weight: ["200", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
