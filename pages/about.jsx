// pages/about.jsx

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Background */}
      <div className="relative w-full h-64">
        <img
          src="/assets/wall.jpg"
          alt="Tripbox Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-start px-6 pb-4 bg-black bg-opacity-30">
          <h1 className="text-3xl font-bold text-white">About us</h1>
        </div>
      </div>

      {/* 소개 본문 */}
      <div className="max-w-2xl mx-auto px-6 py-10 space-y-6 text-left">
        <h2 className="text-xl font-bold text-purple-800">
          세부 여행의 마지막을 완성하는 곳, Tripbox
        </h2>

        <p className="text-base leading-relaxed">
          Tripbox는 <strong>막탄 최대 규모의 기념품 전문샵</strong>입니다.  
          100평이 넘는 넓은 공간에서 한국 인기 아이템과  
          필리핀 전통 공예품, 현지 특산품까지 모두 한자리에 모았습니다.
        </p>
        <p className="text-base leading-relaxed">
          <strong>기념품 그 이상의 감동을,</strong>  
          여행의 마지막 추억을 트립박스에서 담아가세요.
        </p>

        <p className="text-base leading-relaxed">
          Tripbox는 <strong>단순한 기념품 샵</strong>이 아닙니다.  
          저희는 여행 중 머무는 시간조차도 <strong>특별하게</strong> 만들고 싶었습니다.
        </p>
        <p className="text-base leading-relaxed">
          매장 한편에는 다양한 <strong>공방 클래스</strong>가 운영되고 있으며,  
          직접 손으로 만드는 즐거움과 나만의 추억을 함께 담을 수 있습니다.
        </p>
        <p className="text-base leading-relaxed">
          Tripbox는 <strong>합리적인 가격</strong>으로 모든 상품과 워크숍을 제공하며,  
          100평이 넘는 넓고 <strong>쾌적한 공간</strong>에서 여유로운 쇼핑과 체험이 가능합니다.
        </p>
        <p className="text-base leading-relaxed">
          여행의 마지막 한 조각, <strong>Tripbox</strong>에서 감성 가득한 시간을 채워보세요.
        </p>

        <Link href="/">
          <span className="inline-block mt-6 bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-700">
            메인으로 돌아가기
          </span>
        </Link>
      </div>
    </div>
  )
}
