import Link from "next/link"

export const Header = () => (
  <header>
    <nav className="flex flex-wrap gap-4 p-4">
      <Link href="/" className="hover:underline">
        Ana Sayfa
      </Link>
      <Link href="/dateFormat" className="hover:underline">
        dateFormat
      </Link>
      <Link href="/icon" className="hover:underline">
        icon
      </Link>
      <Link href="/recoil" className="hover:underline">
        recoil
      </Link>
      <Link href="/theme" className="hover:underline">
        theme
      </Link>
      <Link href="/useFetch" className="hover:underline">
        useFetch
      </Link>
    </nav>
  </header>
)
