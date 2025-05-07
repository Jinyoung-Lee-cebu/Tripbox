// components/Hero.jsx
export default function Hero() {
  return (
<section className="relative w-full h-auto overflow-hidden">
<img
        src="/assets/wall.jpg"
        alt="Hero Background"
        className="w-full h-min-h-screen object-center"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 space-y-4">
        <h1 className="text-3xl font-bold text-white">세부 최대 규모의 기념품샵</h1>
        <p className="text-lg text-white">합리적인 가격, 다양한 필리핀 선물을 한자리에</p>
        <a
          href="#popular"
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 text-base font-semibold"
          >
          Shop Now
        </a>
      </div>
    </section>
  )
}
