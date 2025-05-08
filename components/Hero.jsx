// components/Hero.jsx
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[300px] overflow-hidden mt-[35px]">
      <img
        src="/assets/wall.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-start justify-start px-6 space-y-1 pt-4 pb-6 mb-4">
        <h1 className="text-xl font-bold text-white">막탄 최대 규모의 기념품 전문샵</h1>
        <p className="text-sm text-white">합리적인 가격으로 즐기는 특별한 쇼핑</p>
        <Link href="/products">
          <span className="relative top-4 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 text-base font-semibold">
            Shop Now
          </span>
        </Link>
      </div>
    </section>
  )
}
