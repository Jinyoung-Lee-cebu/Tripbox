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
      <main className={!isHome ? 'pt-[80px] pb-[80px]' : ''}>
        <Component {...pageProps} />
      </main>
      {!isHome && <Footer />}
    </CartProvider>
  )
}
