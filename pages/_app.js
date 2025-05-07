import '../styles/globals.css'
import { useRouter } from 'next/router'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <CartProvider>
      {!isHome && <Header />}
      <Component {...pageProps} />
      {!isHome && <Footer />}
    </CartProvider>
  )
}
