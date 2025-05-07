import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularProducts from '@/components/PopularProducts'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      {/* ✅ 위로 끌어올리는 부분 */}
      <div className="-mt-20 z-10 relative">
        <PopularProducts />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  )
}
