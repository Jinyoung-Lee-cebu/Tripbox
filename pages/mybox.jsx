import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import Toast from '@/components/Toast'

export default function MyBox() {
  const { items, removeFromCart, clearCart, addToCart } = useCart()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [kakaoId, setKakaoId] = useState('')
  const [deliveryType, setDeliveryType] = useState('pickup')
  const [address, setAddress] = useState('')
  const [toast, setToast] = useState('')

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 1500)
    return () => clearTimeout(t)
  }, [toast])

  const handleSubmit = async () => {
    if (!name || !phone || !kakaoId) {
      setToast('⚠️ 이름·전화·카톡ID를 입력하세요.')
      return
    }
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, kakaoId, items, deliveryType, address }),
      })
      const data = await res.json()
      if (res.ok) {
        setToast(`✅ 주문이 접수되었습니다. (번호: ${data.orderId})`)
        clearCart()
      } else {
        setToast(`❌ ${data.message}`)
      }
    } catch {
      setToast('❌ 주문 접수 중 오류가 발생했습니다.')
    }
  }

  return (
<div className="min-h-screen bg-white px-4 pt-0 pb-6">      <h1 className="text-2xl font-bold mb-4">My Box</h1>

      {items.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => addToCart(item, -1)}
                      className="px-2 py-1 bg-gray-200 rounded text-sm"
                    >
                      −
                    </button>
                    <span className="px-2 text-sm">{item.qty}</span>
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="px-2 py-1 bg-gray-200 rounded text-sm"
                    >
                      ＋
                    </button>
                    <span className="text-sm text-gray-600">₱{item.price * item.qty}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xl text-red-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 space-y-4">
        <p className="font-semibold">총 합계: ₱{total.toLocaleString()}</p>

        <div className="space-y-2">
          <input
            type="text"
            placeholder="이름 (필수)"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="전화번호 (필수)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="카카오톡 ID (필수)"
            value={kakaoId}
            onChange={e => setKakaoId(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <select
            value={deliveryType}
            onChange={e => setDeliveryType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="pickup">픽업</option>
            <option value="delivery">배송</option>
          </select>
          {deliveryType === 'delivery' && (
            <input
              type="text"
              placeholder="배송지 및 희망 시간 입력"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-800 text-white py-3 rounded"
        >
          주문 접수
        </button>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  )
}
