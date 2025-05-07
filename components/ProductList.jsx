const products = Array.from({ length: 30 }, (_, i) => {
  const id = (i + 1).toString().padStart(3, '0')
  return {
    id: `PRD-${id}`,
    name: `상품 ${i + 1}`,
    price: 2000 + (i % 5) * 1000,
    image: `/products/PRD-${id}.jpg`,
  }
})

export default function ProductList() {
  return (
    <section id="products" className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-medium">{p.name}</h3>
              <p className="text-xs text-gray-500">
                ₩{p.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
