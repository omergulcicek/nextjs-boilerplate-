"use client"

import { dateFormat } from "@/utils"

export default function Page() {
  return (
    <>
      <div>{dateFormat()}</div>
      <div>{dateFormat({ date: new Date() })}</div>
      <div>{dateFormat({ date: "02/08/1993" })}</div>
      <div>
        {dateFormat({ date: "05/29/1453", format: "DD MMMM YYYY - dddd" })}
      </div>
    </>
  )
}
