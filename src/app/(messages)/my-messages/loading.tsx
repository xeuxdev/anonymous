import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

export default function Loading() {
  return (
    <>
      <section className="py-10">
        <Skeleton className="h-7 w-72" />

        <Skeleton className="h-6 my-5 w-72" />

        <div className="flex flex-col justify-center gap-10 py-5 md:px-10">
          <div className="flex items-center justify-center gap-5">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="w-12 h-12 rounded-full" />
              ))}
          </div>

          <div className="ring-text ring-1 relative w-[80%] lg:w-64 rounded-lg px-5 py-3 mx-auto overflow-hidden">
            <Skeleton className="w-full h-12" />
          </div>
        </div>
      </section>
      <Skeleton className="w-24 h-10" />{" "}
      <section className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="w-full h-40" />
          ))}
      </section>
    </>
  )
}
