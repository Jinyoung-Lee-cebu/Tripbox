/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // optional: production에선 유용함
  images: {
    unoptimized: true, // dev 환경에서 외부 이미지 호환 문제 방지
  },
  // 아래 설정들은 없다면 넣지 마세요!
  // assetPrefix: '',
  // basePath: '',
}

module.exports = nextConfig;
