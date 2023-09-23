"use client"

import React from "react"
import { signOut } from "next-auth/react"
import { Button } from "./button"

function LogoutButton() {
  return (
    <Button
      variant={"link"}
      className="p-0 text-red-500 h-fit"
      onClick={() => {
        signOut({
          callbackUrl: "/",
        })
      }}
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
