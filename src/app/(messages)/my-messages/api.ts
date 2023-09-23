export async function getProfileInfo(token: string | undefined) {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/users/profile/${token}`,
    {
      cache: "no-store",
    }
  )

  const userInfo = (await res.json()) as {
    id: string
    userName: string
    messageLink: string
  }

  return userInfo
}

export async function getMessages(token: string | undefined) {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/users/profile/${token}/messages`,
    {
      cache: "no-store",
    }
  )

  const userInfo = (await res.json()) as {
    message: string
  }[]

  return userInfo
}
