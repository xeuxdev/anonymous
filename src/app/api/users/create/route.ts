import { AppResponse, AppResponseData } from "@/lib/api"
import prisma from "@/lib/prisma"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

export async function POST(request: Request) {
  const { username } = await request.json()

  if (!username) {
    return AppResponse("invalid data, bad guy", 400)
  }

  const User = await prisma.user.create({
    data: {
      userName: username,
    },
  })

  if (User) {
    const token = jwt.sign({ User }, process.env.JWT_SECRET as string, {
      expiresIn: 365 * 24 * 60 * 60,
    })

    cookies().set({
      name: "anony_user_info",
      value: token,
      httpOnly: true,
      path: "/",
    })
    return AppResponse("link created successfully", 201)
  } else {
    return AppResponse("something went wrong", 500)
  }
}
