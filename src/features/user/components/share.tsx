"use client"

import { BASE_URL } from "@/lib/utils"
import { UserProfileType } from "@/types"
import { Copy, CopyCheck } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

import { Facebook, Linkedin, Twitter } from "lucide-react"

export const socials = [
  {
    SOCIAL_SHARE_LINK: "https://twitter.com/intent/tweet?url=",
    Icon: Twitter,
    includeText: true,
  },
  {
    SOCIAL_SHARE_LINK: "https://www.facebook.com/sharer/sharer.php?u=",
    Icon: Facebook,
    includeText: false,
  },
  {
    SOCIAL_SHARE_LINK: "https://www.linkedin.com/shareArticle?mini=true&url=",
    Icon: Linkedin,
    includeText: false,
  },
]

function Share({
  userInfo,
}: {
  userInfo: Omit<UserProfileType, "firstName" | "lastName" | "email" | "image">
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`${BASE_URL}/messages/${userInfo.messageLink}`)
      .then(() => {
        setCopied(true)
      })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div>
      <header className="my-5">
        Share your link to others so they can send you anonymous messages
      </header>

      <div className="flex flex-col justify-center gap-10 py-5 md:px-10">
        <div className="flex items-center justify-center gap-5">
          {socials.map(({ SOCIAL_SHARE_LINK, Icon, includeText }) => (
            <Link
              key={SOCIAL_SHARE_LINK}
              href={`${SOCIAL_SHARE_LINK}${BASE_URL}/messages/${
                userInfo.messageLink
              }${
                includeText
                  ? `&text=${encodeURIComponent(
                      `Send me an anonymous message`
                    )}`
                  : ""
              }`}
              target="_blank"
              className="p-3 rounded-full ring-1 ring-text bg-background group hover:ring-2"
            >
              <Icon
                size={24}
                className="group-hover:fill-black dark:group-hover:fill-white "
              />
            </Link>
          ))}
        </div>

        <div className="ring-text ring-1 relative w-[80%] lg:w-64 rounded-lg px-5 py-3 mx-auto overflow-hidden">
          <p>
            {BASE_URL}/messages/{userInfo.messageLink}
          </p>
          <button
            className="absolute flex items-center h-8 gap-1 px-4 text-xs font-semibold text-black -translate-y-1/2 rounded-lg shadow bg-background right-1 top-1/2 dark:text-white shadow-black/20"
            onClick={handleCopy}
          >
            {copied ? <CopyCheck className="w-3" /> : <Copy className="w-3" />}{" "}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Share
