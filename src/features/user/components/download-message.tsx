"use client"
import { Button } from "@/components/ui/button"
import { useWindowSize } from "@/hooks/useWindowSize"
import React, { useEffect, useRef } from "react"

function DownloadImage({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { height, width } = useWindowSize()

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    const bannerText = "Send me an anonyy message"

    ctx.fillStyle = "white" // Canvas background color
    ctx.fillRect(0, 0, canvas.width, canvas.height) // Fill canvas with a background color

    // Add a banner at the top with a message
    ctx.fillStyle = "black" // Banner color
    ctx.fillRect(0, 0, canvas.width, 40) // Banner height

    ctx.font = "20px Raleway" // Banner text font and font size
    ctx.fillStyle = "white" // Banner text color
    ctx.fillText(bannerText, canvas.width * 0.5 - bannerText.length * 4, 25) // Banner text and position

    const longText = text
    const maxWidth = canvas.width - 40 // Adjust as needed
    const x = 20
    let y = 70
    const lineHeight = 30 // Adjust as needed

    ctx.fillStyle = "black" // Text color

    // Function to wrap text into lines
    function wrapText(text: string) {
      let words = text.split(" ")
      let line = ""

      for (let word of words) {
        const testLine = line + (line === "" ? "" : " ") + word
        const metrics = ctx.measureText(testLine)
        const testWidth = metrics.width

        if (testWidth > maxWidth) {
          ctx.fillText(line, x, y)
          line = word
          y += lineHeight
        } else {
          line = testLine
        }
      }

      ctx.fillText(line, x, y)
    }

    wrapText(longText)
  }, [text, width])

  // Function to convert canvas to an image and trigger download
  const downloadImage = () => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const dataURL = canvas.toDataURL("image/png") // Convert canvas to a data URL
    const a = document.createElement("a") // Create a link element
    a.href = dataURL // Set the link's href to the data URL
    a.download = `anonyy_${Date.now().toString()}.png` // Set the download attribute
    a.click() // Trigger a click event on the link
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width > 400 ? 400 : width - 40}
        height="300"
        className="rounded-md"
      />
      {/* <button onClick={drawText}>Draw Text</button> */}
      <Button onClick={downloadImage} className="mt-5">
        Download Image
      </Button>
    </div>
  )
}

export default DownloadImage
