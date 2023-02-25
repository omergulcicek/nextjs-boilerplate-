"use client"

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
      <div>
        {items.map((e) => (
          <span key={e}>{e}, </span>
        ))}
      </div>
    </>
  )
}
