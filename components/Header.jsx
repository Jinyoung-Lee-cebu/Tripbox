import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-purple-800 text-white pr-4 py-1 flex items-center shadow fixed top-0 left-0 w-full z-50">
      <Link href="/">
        <img
          src="/assets/top.png"
          alt="Tripbox Logo"
          className="h-20 -my-5 -ml-2 cursor-pointer"
        />
      </Link>

      <nav className="ml-auto space-x-4 text-sm flex items-center">
        {/* Shop 메뉴 - 앞으로 이동 */}
        <Link href="/products">
          <span className="font-semibold">Shop</span>
        </Link>

        {/* Rent 메뉴 - 뒤로 이동 */}
        <Link href="/seascooter">
          <span className="font-bold text-red-400 hover:text-red-300 transition">
            Rent
          </span>
        </Link>

        {/* My Box 메뉴 */}
        <Link href="/mybox">
          <span className="text-yellow-300 font-semibold">
            My Box
            {itemCount > 0 && (
              <span className="ml-1 text-xs bg-white text-purple-800 px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </span>
        </Link>
      </nav>
    </header>
  )
}
