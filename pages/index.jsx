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

      {/* ✅ 히어로 밑 적당한 간격 유지 버전 */}
      <div className="-mt-20 z-10 relative">
        <PopularProducts />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  )
}
