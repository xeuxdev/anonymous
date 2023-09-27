"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download } from "lucide-react"
import React from "react"
import DownloadImage from "./download-message"

function MessageCard({ message }: { message: string }) {
  return (
    <>
      <div className="p-5 rounded-md min-h-[10rem] bg-muted relative group">
        <p className="break-words break-all text-primary">{message}</p>

        <Dialog>
          <DialogTrigger>
            {" "}
            <span className="absolute grid w-8 h-8 rounded-md lg:hidden bg-card place-items-center top-3 right-3 group-hover:grid">
              <Download className="w-5 h-5 " />
            </span>
          </DialogTrigger>
          <DialogContent className="bg-muted">
            <DialogHeader>
              <DialogTitle>Download this image</DialogTitle>
              <DialogDescription>
                You can download this message as image
              </DialogDescription>
            </DialogHeader>

            <DownloadImage text={message} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default MessageCard
