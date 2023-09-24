"use client"
import React, { FormEvent, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Loader } from "lucide-react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

function CreateLink() {
  const [error, setError] = useState("")
  const router = useRouter()

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (username: string) => {
      const res = await axios.post("/api/users/create", {
        username: username,
      })

      return res.data
    },
    mutationKey: ["createLink"],
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const username = formData.get("username")

    if (!username || username === "") {
      setError("please enter a username")
      return
    }
    setError("")

    // console.log(formData.get("username"))

    mutateAsync(username as string)
      .then((res) => {
        toast.success(res.message)
        router.push(`/my-messages/`)
      })
      .catch((err) => {
        toast.error(err?.response?.data.message)
      })
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button asChild>
            <span>Create Link</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle className="text-base md:text-lg">
              Create your anonymous messaging link
            </DialogTitle>
            <DialogDescription>
              This would enable you to receive messages anonymously
            </DialogDescription>
          </DialogHeader>

          <div className="py-10">
            <form
              action=""
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <Label htmlFor="email">Your name / alias</Label>
                <Input placeholder="enter a username" name="username" />
                <p className="text-xs text-red-500">{error}</p>
              </div>

              <Button className="ml-auto ">
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" />
                  </>
                ) : (
                  "Create"
                )}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateLink
