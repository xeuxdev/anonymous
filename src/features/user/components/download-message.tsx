"use client"
import { Button } from "@/components/ui/button"
import React, { useEffect, useRef } from "react"

function DownloadImage({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Function to draw text on the canvas

  useEffect(() => {
    const canvas = canvasRef?.current as HTMLCanvasElement
    const maxWidth = canvas.width - 40 // Adjust as needed
    const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D

    ctx.fillStyle = "white" // Text color
    ctx.fillRect(0, 0, canvas.width, canvas.height) // Fill canvas with a background color
    ctx.font = "16px Raleway" // Font and font size
    ctx.fillStyle = "black" // Text color

    let x = 10
    let y = 40
    let lineHeight = 25 // Adjust as needed

    const words = text.split(" ")
    console.log(words)
    let line = ""

    for (let word of words) {
      const testLine = line + " " + word
      //   const testLine = line + (line === "" ? "" : " ") + word

      console.log(testLine)
      const metrics = ctx.measureText(text)
      const testWidth = metrics.width

      if (testWidth > maxWidth) {
        ctx.fillText(line, x, y)
        line = word
        y += lineHeight
      } else {
        line = testLine
      }
    }

    ctx.fillText(line, 10, 10) // Text and position
    // ctx.
  }, [text])

  // Function to convert canvas to an image and trigger download
  const downloadImage = () => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const dataURL = canvas.toDataURL("image/png") // Convert canvas to a data URL
    const a = document.createElement("a") // Create a link element
    a.href = dataURL // Set the link's href to the data URL
    a.download = "text_image.png" // Set the download attribute
    a.click() // Trigger a click event on the link
  }

  return (
    <div>
      <canvas ref={canvasRef} width="400" height="300"></canvas>
      {/* <button onClick={drawText}>Draw Text</button> */}
      <Button onClick={downloadImage} className="mt-5">
        Download Image
      </Button>
    </div>
  )
}

export default DownloadImage
