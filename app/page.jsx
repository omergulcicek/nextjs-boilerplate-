"use client"

import { FaApple } from "react-icons/fa"
import { Button, H1 } from "@/components"
import { dateFormat } from "@/utils"
import { ThemeSwitch } from "./themeSwitch"

import { useEffect } from "react"
import { useRecoilValue, useRecoilState } from "recoil"
import { itemsAtom, itemsSelector } from "@/store"

export default function Page() {
  const itemsObj = useRecoilValue(itemsSelector)
  const [items, setItems] = useRecoilState(itemsAtom)

  useEffect(() => {
    setItems((prev) => [...prev, 5])
    setItems((prev) => [...prev, 6])

    console.log(itemsObj)
  }, [])

  return (
    <>
      <H1 className="text-red-600">Hello, Next.js!</H1>
      <Button className="rounded-xl">Ara</Button>
      <FaApple size={40} color={"blue"} />
      {dateFormat()}
      <div>
        {items.map((e) => (
          <span key={e}>{e}, </span>
        ))}
      </div>
      <ThemeSwitch />
    </>
  )
}

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
}
