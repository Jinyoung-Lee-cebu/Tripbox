// components/SwiperLoader.jsx
import dynamic from 'next/dynamic'

// Swiper와 관련 스타일, 모듈을 클라이언트 전용으로 동적 로드
export default dynamic(
  async () => {
    const { Swiper, SwiperSlide } = await import('swiper/react')
    const { Navigation, Pagination } = await import('swiper/modules')
    return function SwiperClient({ children, ...props }) {
      return (
        <Swiper modules={[Navigation, Pagination]} {...props}>
          {children}
        </Swiper>
      )
    }
  },
  { ssr: false }
)
