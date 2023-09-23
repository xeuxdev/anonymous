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

function CreateLink() {
  const [error, setError] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get("name")

    if (!name || name === "") {
      setError("please enter your name / alias")
      return
    }
    setError("")

    console.log(formData.get("name"))
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
          <DialogHeader>
            <DialogTitle>Create your anonymous messaging link</DialogTitle>
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
                <Input placeholder="enter your name / alias" name="name" />
                <p className="text-xs text-red-500">{error}</p>
              </div>

              <Button className="ml-auto ">Create</Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateLink
