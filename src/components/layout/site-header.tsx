import React from "react"
import { ThemeToggle } from "../theme/theme-toggle"
import { Send } from "lucide-react"
import MobileNav from "./mobile-nav"

function SiteHeader() {
  return (
    <header className="flex items-center justify-between bg-background container py-3 md:py-8">
      <div className="flex items-center gap-4">
        <p className="font-bold text-primary text-lg md:text-xl ">Ask Out</p>

        <Send />
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  )
}

export default SiteHeader
