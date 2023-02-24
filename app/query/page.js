"use client"

import { useFetch } from "@/hooks"

export default function Page() {
  const { isLoading, status, error } = useFetch(
    "unique-key",
    "https://api.github.com/repos/tannerlinsley/react-query"
  )

  if (isLoading) return "Yükleniyor..."

  if (error) return "Bir hata mevcut: " + error.message

  return (
    <div>
      <div>
        <p>{status}</p>
      </div>
    </div>
  )
}
