// components/Header.jsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-800 text-white px-4 py-1 flex items-center shadow">
      <img src="/assets/top.png" alt="Tripbox Logo" className="h-10" />
      <nav className="ml-auto space-x-4 text-sm flex items-center">
        <Link href="/products">Products</Link>
        <Link href="/mybox">
          <span className="text-yellow-300 font-semibold">My Box</span>
        </Link>
      </nav>
    </header>
  )
}
