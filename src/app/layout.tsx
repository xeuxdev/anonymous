import { ThemeProvider } from "@/components/theme/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Toast from "@/components/toast"
import SiteHeader from "@/components/layout/site-header"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ask Out",
  description: " Ask Out - Ask your date out",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <Toast />
        </ThemeProvider>
      </body>
    </html>
  )
}
