// pages/index.jsx
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import PopularProducts from '@/components/PopularProducts'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/assets/wall.jpg"
          alt="배경 이미지"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
        <div className="absolute top-12 left-4 z-10 text-white">
          <h1 className="text-2xl font-bold mb-2">세부에서 만나는 특별한 추억</h1>
          <Link href="/products">
            <span className="inline-block bg-white text-black px-4 py-2 rounded text-sm font-semibold">
              Shop Now
            </span>
          </Link>
        </div>
      </section>

      <PopularProducts />

      {/* How It Works */}
      <section id="how-it-works" className="w-full bg-white px-4 py-8">
        <div className="max-w-screen-xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-purple-800 text-white flex items-center justify-center">1</div>
              <p className="mt-2">상품 선택</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-purple-800 text-white flex items-center justify-center">2</div>
              <p className="mt-2">My Box 담기</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-purple-800 text-white flex items-center justify-center">3</div>
              <p className="mt-2 text-center">
                주문 확정<br/>(픽업 or 배송)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="w-full bg-purple-800 text-white px-4 py-8">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold">회사 소개</h3>
            <p>
              Tripbox는 막탄 최대 규모(100평 이상)의 기념품 전문샵으로,  
              세련된 감성과 합리적인 가격을 모두 갖춘 공간입니다.  
              한국에서 인기있는 상품부터 필리핀 현지 공예품까지, 국내외 관광객 누구나 만족할 수 있는 다양한 상품을 한자리에 모았습니다.  
              트립박스에서 여행의 마지막 쇼핑을 완성해보세요.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">위치 안내</h3>
            <p>The Promenade Mactan, 샹그릴라 호텔 맞은편</p>
            <a href="https://maps.app.goo.gl/aFeGYjsCjGju5HFF6" className="underline">구글맵 바로가기</a>
          </div>
          <div>
            <h3 className="font-semibold">실시간 상담</h3>
            <p>연중무휴 08:00~21:00</p>
            <a href="http://pf.kakao.com/_Pnebn/chat" className="underline">카카오톡 상담 바로가기</a>
          </div>
          <p className="text-center text-sm">© 2025 Tripbox</p>
        </div>
      </section>
    </div>
  )
}
