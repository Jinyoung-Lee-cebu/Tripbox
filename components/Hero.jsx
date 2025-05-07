// components/Hero.jsx
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <img
        src="/assets/wall.jpg"
        alt="Hero Background"
        className="w-full h-full object-contain object-center"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start px-6 space-y-6 pt-8 pb-8 mb-4">
        <h1 className="text-3xl font-bold text-white">세부 여행의 마지막 쇼핑을 완성해보세요</h1>
        <p className="text-lg text-white">합리적인 가격, 다양한 필리핀 선물을 한자리에</p>
        <Link href="/products">
          <span className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 text-base font-semibold">
            Shop Now
          </span>
        </Link>
      </div>
    </section>
  )
}
