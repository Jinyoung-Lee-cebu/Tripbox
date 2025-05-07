import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularProducts from '@/components/PopularProducts'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative overflow-hidden"> {/* ✅ 하단 공백 제거 핵심 */}
      <Header />
      <Hero />

      {/* Hero 밑 섹션 훨씬 많이 겹치게 올리기 */}
      <div className="-mt-[850px] z-10 relative">
        <PopularProducts />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  )
}
