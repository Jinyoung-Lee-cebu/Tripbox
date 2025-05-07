// components/HowItWorks.jsx

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white px-4 py-1">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold text-left mb-6">How It Works</h2>
        <div className="grid grid-cols-3 text-center gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-purple-800 text-white flex items-center justify-center font-semibold">
              1
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800">상품 선택</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-purple-800 text-white flex items-center justify-center font-semibold">
              2
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800">My Box 담기</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-purple-800 text-white flex items-center justify-center font-semibold">
              3
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800 whitespace-pre-line">
              주문 확정<br />(픽업 or 배송)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
