import products from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Products() {
  const { items, addToCart } = useCart()

  const getQty = (id) => {
    const found = items.find(i => i.id === id)
    return found ? found.qty : 0
  }

  return (
    <div className="px-4 pt-0 pb-4">
      <h1 className="text-2xl font-bold mb-6">🛍 Products</h1>
      <ul className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <li
            key={product.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
          >
            {/* 상품 이미지 */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-cover rounded mb-2"
            />

            {/* 상품 이름 (왼쪽 정렬) */}
            <p className="font-semibold text-left w-full">{product.name}</p>

            {/* 가격 + 수량 버튼 */}
            <div className="flex justify-between items-center w-full mt-2">
              <span className="text-sm text-gray-600">₱{product.price}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => addToCart(product, -1)}
                  className="px-2 py-1 bg-gray-200 rounded text-sm"
                >
                  −
                </button>
                <span className="min-w-[20px] text-center">{getQty(product.id)}</span>
                <button
                  onClick={() => addToCart(product, 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-sm"
                >
                  ＋
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
