import { ThemeProvider } from "@/components/theme/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import Toast from "@/components/toast"
import SiteHeader from "@/components/layout/site-header"
import { siteConfig } from "@/config/site"
import QueryProvider from "@/components/query-provider"

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.name} +  - Ask your date out`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <SiteHeader />
            {children}
          </QueryProvider>
          <Toast />
        </ThemeProvider>
      </body>
    </html>
  )
}
