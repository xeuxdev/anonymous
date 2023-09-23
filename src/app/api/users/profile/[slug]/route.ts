import { AppResponse, AppResponseData } from "@/lib/api"
import prisma from "@/lib/prisma"
import jwt from "jsonwebtoken"

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      slug: string
    }
  }
) {
  const token = params.slug

  let decodedData

  // console.log(token)

  if (!token) {
    return AppResponse("UNAUTHORIZED", 401)
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    if (decoded) {
      // console.log(decoded)
      // @ts-ignore
      decodedData = decoded.User
      // res.status(200).json({ decodedData })
    }
  } catch (err: any) {
    // console.log(err.message)
    return AppResponse("Token expired", 400)
  }

  const User = await prisma.user.findUnique({
    where: {
      messageLink: decodedData.messageLink,
      userName: decodedData.userName,
    },
  })

  // console.log(User)

  if (User) {
    return AppResponseData(User, 200)
  } else {
    return AppResponse("not found", 404)
  }
}
