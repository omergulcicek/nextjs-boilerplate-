"use client"

import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import { H1, Button } from "@/components"

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-40">
        <H1>Next.js 13 Boilerplate 🚀</H1>

        <Link
          href="https://github.com/omergulcicek/nextjs-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded">
            <FiGithub />
            <span>GitHub</span>
          </Button>
        </Link>
      </div>
    </>
  )
}
