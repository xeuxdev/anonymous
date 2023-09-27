import { AppResponse } from "@/lib/api"
import prisma from "@/lib/prisma"

export async function POST(request: Request) {
  const { messageLink, message } = await request.json()

  if (!messageLink) return AppResponse("bad guy", 400)

  const newMessage = await prisma.messages.create({
    data: {
      message: message,
      messageLink,
    },
  })

  // console.log(newMessage)

  if (newMessage) {
    return AppResponse("message sent successfully", 201)
  } else {
    return AppResponse("failed to send message", 500)
  }
}
