import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSwipeable } from 'react-swipeable'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'
import Toast from '@/components/Toast'

export default function ProductDetail({ product }) {
  const router = useRouter()
  const { items, addToCart, removeFromCart } = useCart()
  const [qty, setQty] = useState(1)
  const [toast, setToast] = useState('')

  if (router.isFallback) return <p>Loading…</p>
  if (!product) return <p>상품을 찾을 수 없습니다.</p>

  const idx = products.findIndex(p => p.id === product.id)
  const prev = products[idx - 1]?.id
  const next = products[idx + 1]?.id

  const handlers = useSwipeable({
    onSwipedLeft: () => next && router.push(`/products/${next}`),
    onSwipedRight: () => prev && router.push(`/products/${prev}`),
    trackMouse: true,
  })

  const onAdd = () => {
    addToCart(product, qty)
    setToast('상품을 My Box에 담았습니다.')
    setTimeout(() => setToast(''), 1000)
  }

  const onRemove = () => {
    removeFromCart(product.id)
    setToast('해당 상품을 My Box에서 모두 제거했습니다.')
    setTimeout(() => setToast(''), 1000)
  }

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div {...handlers} className="relative min-h-screen bg-white pb-32">
      <div className="px-4 py-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      <div className="px-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-4">
          ₱{product.price.toLocaleString()}
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            −
          </button>
          <span>{qty}</span>
          <button
            onClick={() => setQty(q => Math.min(99, q + 1))}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            ＋
          </button>
        </div>

        <button
          onClick={onAdd}
          className="w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-700 mb-2"
        >
          Add to Box
        </button>

        <button
          onClick={onRemove}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Remove this product from My Box
        </button>
      </div>

      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg overflow-hidden w-56 z-10">
        <div className="px-4 py-2 border-b">
          <p className="text-sm text-gray-700">
            총 선택 수량:{' '}
            <span className="font-semibold">{totalQty}</span>
          </p>
        </div>
        <div className="px-4 py-2 border-b">
          <p className="text-sm text-gray-700">
            총 합계:{' '}
            <span className="font-semibold">₱{cartTotal.toLocaleString()}</span>
          </p>
        </div>
        <Link href="/mybox">
          <div className="flex items-center justify-center bg-purple-800 text-white py-2 cursor-pointer">
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            My Box
          </div>
        </Link>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: products.map(p => ({ params: { id: p.id } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.id === params.id) || null
  return { props: { product } }
}
