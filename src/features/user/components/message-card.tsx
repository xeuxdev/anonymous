import React from "react"

function MessageCard({ message }: { message: string }) {
  return (
    <div className="p-5 rounded-md min-h-[10rem] bg-muted">
      <p className="break-words break-all text-primary">{message}</p>
    </div>
  )
}

export default MessageCard
