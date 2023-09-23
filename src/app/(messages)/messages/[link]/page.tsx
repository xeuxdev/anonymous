import SendMessageForm from "@/features/messages/component/send-message"
import React from "react"

async function Messages({ params }: { params: { link: string } }) {
  const messageLink = params.link

  return (
    <>
      <h1 className="text-xl font-semibold">Welcome to Anony </h1>

      <p className="my-5">
        you can send an anoymous message here to the owner of this link
      </p>

      <section className="flex items-center justify-center my-10">
        <SendMessageForm messageLink={messageLink} />
      </section>
    </>
  )
}

export default Messages
