import Link from 'next/link'
import products from '@/data/products'

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold px-4 py-4">Products</h1>
      <div className="px-4 grid grid-cols-2 gap-4">
        {products.map(p => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <div className="block bg-white rounded-lg p-2 shadow cursor-pointer">
              <img src={p.image} alt={p.name} className="w-full h-24 object-cover rounded" />
              <p className="mt-2 text-sm font-medium">{p.name}</p>
              <p className="text-xs text-gray-600">₱{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
