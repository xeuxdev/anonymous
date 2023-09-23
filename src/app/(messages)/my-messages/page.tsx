import React from "react"
import { getMessages, getProfileInfo } from "./api"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Share from "@/features/user/components/share"
import MessageCard from "@/features/user/components/message-card"

export const metadata = {
  title: "My Messages",
  description: "View your messages here",
}

async function MyMessages() {
  const token = cookies().get("anony_user_info")
  const userInfo = await getProfileInfo(token?.value)
  const messages = await getMessages(token?.value)

  // @ts-ignore
  if (userInfo.message) {
    redirect("/messages")
  }

  return (
    <>
      <section>
        <h1 className="text-xl font-semibold">
          Welcome back, <span className="capitalize">{userInfo.userName}</span>
        </h1>

        <Share userInfo={userInfo} />
      </section>

      <h2 className="my-5 text-xl font-semibold ">Your messages</h2>

      <section className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {messages.map((item, i) => (
          <MessageCard message={item.message} key={i} />
        ))}
        {messages.length === 0 && <p>You have no new messages</p>}
      </section>
    </>
  )
}

export default MyMessages
