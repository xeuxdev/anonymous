import React from "react"
import { ThemeToggle } from "../theme/theme-toggle"
import { Send } from "lucide-react"
import { siteConfig } from "@/config/site"
import DesktopNav from "./navigations/desktop-nav"
import Profile from "./header/profile"
import Link from "next/link"

function SiteHeader() {
  return (
    <header className="py-3 md:py-8">
      <nav className="container flex items-center justify-between bg-background">
        <Link href={"/"} className="flex items-center gap-4">
          <p className="text-lg font-bold text-primary md:text-xl ">
            {siteConfig.name}
          </p>

          <Send />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <MobileNav /> */}
          <Profile
            user={{
              email: "xeyhuru@gmail.com",
              id: "4858h",
              image: "",
              firstName: "Tochukwu",
              lastName: "John",
            }}
          />
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
