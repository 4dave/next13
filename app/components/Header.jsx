import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/code">Code</Link>
        </div>
      </div>
    </header>
  )
}
