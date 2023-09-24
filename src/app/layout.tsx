import { ThemeProvider } from "@/components/theme/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import Toast from "@/components/toast"
import SiteHeader from "@/components/layout/site-header"
import { siteConfig } from "@/config/site"
import QueryProvider from "@/components/query-provider"
import { Analytics } from "@vercel/analytics/react"

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}`),
  title: `${siteConfig.name} | ${siteConfig.description}`,
  description: `${siteConfig.name} +  - Ask your date out`,
  openGraph: {
    type: "website",
    description: " Anonymously Send Messages to People",
    images: "/logo.png",
    siteName: `${siteConfig.name}`,
    title: `${siteConfig.name} | ${siteConfig.description}`,
    url: `${siteConfig.url}`,
  },
  twitter: {
    creator: `xeuxdev`,
    site: `${siteConfig.url}`,
    title: `${siteConfig.name} | ${siteConfig.description}`,
    card: "summary",
    description: `${siteConfig.description}`,
  },
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
