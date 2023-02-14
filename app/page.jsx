import { FaApple } from "react-icons/fa"
import { Button, H1 } from "@/components"

export default function Page() {
  return (
    <>
      <H1 className="text-red-600">Hello, Next.js!</H1>
      <Button className="rounded-xl">Ara</Button>
      <span>
        <FaApple size={40} color={"blue"} />
      </span>
    </>
  )
}

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
}
