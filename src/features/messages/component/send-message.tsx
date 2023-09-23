"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React, { FormEvent, useEffect, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Check, Loader } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"

function SendMessageForm({ messageLink }: { messageLink: string }) {
  const [charLength, setCharLength] = useState(0)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(`/api/users/create/message`, {
        messageLink,
        message,
      })

      return res.data
    },
    mutationKey: ["send-messages"],
  })

  useEffect(() => {
    setCharLength(message.length)
  }, [message])

  useEffect(() => {
    if (message.length > 255) {
      setError("max of 255 characters allowed ")
    } else {
      setError("")
    }
  }, [message])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(message)
    mutateAsync()
      .then((res) => {
        toast.success(res.message)
        setIsOpen(true)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <>
      <form
        className="flex flex-col w-full max-w-xl gap-4"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="message">Enter your message ({charLength} / 255)</Label>

        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`min-h-[8rem] ${
            error != "" && " focus-visible:ring-red-500"
          }`}
        />
        <p className="text-sm text-red-500">{error}</p>

        <Button>
          {isLoading ? <Loader className="animate-spin" /> : "Send Message"}
        </Button>
      </form>

      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default SendMessageForm

const SuccessModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="py-10">
        <DialogHeader>
          <DialogTitle>Message successfully sent</DialogTitle>
          <DialogDescription>
            Your anonymous message has been sent successfully
          </DialogDescription>
        </DialogHeader>

        {/* <p className="text-xl"> </p> */}

        <div className="grid w-16 h-16 mx-auto my-10 rounded-full place-items-center bg-muted">
          <Check className="w-12 h-12 text-green-500" />
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-y-6 gap-x-3">
          <Button onClick={() => setIsOpen(false)} variant={"outline"}>
            Continue sending messages
          </Button>
          <Button asChild>
            <Link href={"/messages"}>Create your own link</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
