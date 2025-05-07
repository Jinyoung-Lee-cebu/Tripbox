export default function Footer() {
  return (
    <footer className="bg-purple-800 text-center text-white text-sm mt-12 py-6">
      <div className="space-x-4 underline">
        <a href="#company">회사소개</a>
        <a href="#location">위치안내</a>
        <a
          href="http://pf.kakao.com/_Pnebn/chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          상담하기
        </a>
      </div>
      <p className="mt-2 text-xs text-gray-300">&copy; 2025 Tripbox</p>
    </footer>
  )
}
