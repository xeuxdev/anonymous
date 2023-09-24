import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container">
      <section
        id="#home"
        className="flex flex-col items-center justify-center h-[calc(100vh-64px)] lg:h-[calc(100vh-104px)]"
      >
        {/* 64 104 */}
        <h1 className="max-w-4xl mx-auto text-2xl font-bold text-center md:text-4xl lg:text-6xl [text-wrap:balance]">
          Anonymously Send Messages to People
        </h1>

        <p className="my-10 text-center text-muted-foreground">
          Send messages to people without them knowing it&apos;s you 😜.
        </p>

        <Button asChild>
          <Link href={"/messages"} className="font-black">
            Get Started
          </Link>
        </Button>
      </section>
    </main>
  )
}
