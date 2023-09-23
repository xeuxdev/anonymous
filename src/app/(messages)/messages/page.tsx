import CreateLink from "@/features/messages/component/create-link"
import React from "react"

function Messages() {
  return (
    <section id="#home" className="flex flex-col items-center py-20 ">
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

export default Messages
