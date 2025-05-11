

export default function SeaScooterPage() {
  return (
    <div className="bg-white p-4 text-sm">
      {/* ✅ 상단 강조 배너 */}
      <section className="bg-gray-100 border border-gray-200 rounded-xl p-5 mb-6 shadow-sm text-center leading-snug">
  <h1 className="text-xl font-bold text-gray-800 mb-1 tracking-tight">
    세부 바다를 위한 품격 있는 선택
  </h1>
  <h2 className="text-2xl font-extrabold text-purple-700 mb-2">
    전동 씨스쿠터 렌탈 서비스
  </h2>
  <p className="text-sm text-gray-700">
    예약금 ₩10,000 + ₱1000 / <span className="font-medium text-black">충전기 무상 제공</span><br />
    제트 · 서프 모델 / 리조트까지 당일 배송 지원
  </p>
</section>


      {/* ✅ 제품 이미지: 모바일에서도 가로 2열 */}
      <section className="grid grid-cols-2 gap-4 mb-6">
  {/* 제트 모델 */}
  <div className="border rounded overflow-hidden shadow-sm">
    <img
      src="/products/jet.jpg"
      alt="씨스쿠터 제트"
      width={800}
      height={600}
      className="w-full h-48 object-cover"
    />
    <div className="p-3">
      <h3 className="font-semibold text-lg">제트 (Jet)</h3>
      <p className="text-gray-700 text-sm">
        성인 추천 / 고속 추진<br />
        제트형 전동 씨스쿠터
      </p>
    </div>
  </div>

  {/* 서프 모델 */}
  <div className="border rounded overflow-hidden shadow-sm">
    <img
      src="/products/surf.jpg"
      alt="씨스쿠터 서프"
      width={800}
      height={600}
      className="w-full h-48 object-cover"
    />
    <div className="p-3">
      <h3 className="font-semibold text-lg">서프 (Surf)</h3>
      <p className="text-gray-700 text-sm">
        아동 추천 / 부드러운 주행<br />
        서핑형 전동 씨스쿠터
      </p>
    </div>
  </div>
</section>


      {/* ✅ 요금 안내 */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">💰 대여 요금</h2>
        <p className="text-gray-800">
          예약금 <strong>₩10,000</strong> + 현장 결제 <strong>₱1000</strong>
        </p>
        <p className="text-sm text-gray-500 mt-1">1일 기준 / 충전기 무상 제공</p>
      </section>

      {/* ✅ 배송 안내 */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">🚚 배송 안내 (편도 기준)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>두짓타니 ~ 뉴타운: <strong>무료</strong></li>
          <li>제이파크: <strong>₱100</strong></li>
          <li>솔레아: <strong>₱200</strong></li>
        </ul>
      </section>

      {/* ✅ 유의사항 */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">⚠️ 이용 시 유의사항</h2>
        <p className="text-gray-700">
          - 대여 시 <strong>면책 동의서 서명</strong>이 필요합니다.<br />
          - <strong>파손/분실 시 전액 배상</strong> 책임이 있습니다.
        </p>
      </section>

      {/* ✅ 본문 내 카카오톡 예약 버튼 */}
      <div className="mt-8">
        <a
          href="http://pf.kakao.com/_Pnebn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-400 hover:bg-yellow-300 text-black text-center font-bold py-3 rounded-lg transition"
        >
          💬 카카오톡으로 예약하기
        </a>
      </div>

      {/* ✅ 플로팅 카카오톡 버튼 */}
      <a
        href="http://pf.kakao.com/_Pnebn/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-5 rounded-full shadow-lg transition"
      >
        💬 카카오톡 예약
      </a>
    </div>
  )
}
