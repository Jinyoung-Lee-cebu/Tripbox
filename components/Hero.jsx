// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <img
        src="/assets/wall.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 space-y-4">
        <h1 className="text-3xl font-bold text-white">Find your perfect souvenir</h1>
        <p className="text-lg text-white">Discover unique gifts and mementos from the Philippines</p>
        <a
          href="#popular"
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
