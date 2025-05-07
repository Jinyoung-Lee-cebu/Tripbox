// pages/confirmation.jsx

import Link from 'next/link'

export default function Confirmation() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">주문이 접수되었습니다!</h1>
      <p className="mb-2">감사합니다. 곧 안내드리겠습니다.</p>
      <p className="mb-6">
        픽업 시: 지정된 시간에 매장으로 방문해주세요.  
        <br />
        배송 시: 카카오톡 채널로 배송 안내를 드립니다.
      </p>
      <Link href="/">
        <a className="bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-700">
          홈으로 돌아가기
        </a>
      </Link>
    </div>
  )
}
