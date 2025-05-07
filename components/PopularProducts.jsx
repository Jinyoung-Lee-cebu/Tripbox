import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Link from 'next/link'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'
import Toast from './Toast'

export default function PopularProducts() {
  const { addToCart } = useCart()
  const [qtys, setQtys] = useState(
    products.slice(0, 4).reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
  )
  const [toast, setToast] = useState('')

  const handlers = useSwipeable({ trackMouse: true })
  const inc = id => setQtys(q => ({ ...q, [id]: Math.min(99, q[id] + 1) }))
  const dec = id => setQtys(q => ({ ...q, [id]: Math.max(0, q[id] - 1) }))

  const onAdd = product => {
    const qty = qtys[product.id]
    if (qty < 1) return
    addToCart(product, qty)
    setToast(`"${product.name}" ${qty}개를 담았습니다`)
    setTimeout(() => setToast(''), 2000)
    setQtys(q => ({ ...q, [product.id]: 0 }))
  }

  return (
    <section id="popular" className="w-full bg-white px-4 py-8">
      <h2 className="text-xl font-bold mb-4">인기 상품</h2>
      <div {...handlers} className="flex overflow-x-auto space-x-4 pb-2">
        {products.slice(0, 4).map(product => (
          <div key={product.id} className="min-w-[45%] bg-gray-50 rounded-lg p-3 flex-shrink-0">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded"
              />
            </Link>
            <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">₱{product.price.toLocaleString()}</p>
            <div className="flex items-center space-x-2 mt-2">
              <button onClick={() => dec(product.id)} className="px-2 py-1 bg-gray-200 rounded">−</button>
              <span className="w-6 text-center">{qtys[product.id]}</span>
              <button onClick={() => inc(product.id)} className="px-2 py-1 bg-gray-200 rounded">＋</button>
            </div>
            <button
              onClick={() => onAdd(product)}
              disabled={qtys[product.id] < 1}
              className="w-full bg-purple-800 text-white text-sm py-1 rounded mt-2 hover:bg-purple-700 disabled:opacity-50"
            >
              Add to Box
            </button>
          </div>
        ))}
      </div>
      {toast && <Toast message={toast} />}
    </section>
  )
}
