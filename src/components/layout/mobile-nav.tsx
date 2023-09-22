"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Send } from "lucide-react"

import React, { useState } from "react"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { Button } from "../ui/button"
import { useMediaQuery } from "@/hooks/useMediaQuery"

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const matches = useMediaQuery("(min-width: 768px)")

  if (matches) {
    return null
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-4">
              <p className="font-bold text-primary text-lg md:text-xl lg:text-2xl hidden md:flex">
                Ask Out
              </p>

              <Send />
            </div>
          </SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>

        <div className="flex flex-col gap-10 mt-20">
          {siteConfig.navigations.map((item) => (
            <Button
              key={item.name}
              asChild
              variant={"link"}
              className="text-left pl-0 w-fit"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Link href={item.href} className="uppercase ">
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
