import { siteConfig } from "@/config/site"
import CreateLink from "@/features/messages/component/create-link"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: `Messages | ${siteConfig.name} - ${siteConfig.description}`,
  description: " Start Sending and Receiving Anonymous messages now!",
}

function Message() {
  return (
    <section
      id="#home"
      className="flex flex-col items-center h-[calc(100vh-64px)] lg:h-[calc(100vh-104px)] justify-center"
    >
      <h1 className="max-w-5xl mx-auto text-2xl font-bold text-center md:text-4xl lg:text-6xl">
        Start Sending and Receiving Anonymous messages now!
      </h1>

      <p className="my-10 text-center text-muted-foreground">
        To start receiving anonymous messages, create an anonymous link below .
      </p>

      <CreateLink />
    </section>
  )
}

export default Message
