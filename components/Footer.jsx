import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-center text-white text-sm mt-12 py-6">
      <div className="space-x-4 underline">
        <Link href="/about" className="underline">회사소개</Link>
        <a
          href="https://maps.app.goo.gl/QEM9WxTMdqsXo29e6"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          위치안내
        </a>
        <a
          href="http://pf.kakao.com/_Pnebn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          상담하기
        </a>
      </div>
      <p className="mt-2 text-xs text-gray-300">&copy; 2025 Tripbox</p>
    </footer>
  )
}
