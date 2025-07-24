const handleSubmit = async () => {
  if (isSubmitting) return
  if (!name || !phone || !kakaoId) {
    setToast('⚠️ 이름·전화·카톡ID를 입력하세요.')
    return
  }
  if (sortedItems.length === 0) {
    setToast('⚠️ 장바구니에 상품이 없습니다.')
    return
  }

  setIsSubmitting(true)

  try {
    // 1. 스프레드시트에 저장
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        kakaoId,
        items: sortedItems,
        deliveryType,
        address
      }),
    })
    const data = await res.json()

    if (!res.ok) {
      setToast(`❌ ${data.message}`)
      return
    }

    // 2. 클립보드용 텍스트 구성
    const orderText = `
[TRIPBOX 주문 접수]
이름: ${name}
전화번호: ${phone}
카카오톡 ID: ${kakaoId}
픽업 방식: ${deliveryType === 'pickup' ? '픽업' : '배송'}
${deliveryType === 'delivery' ? `주소: ${address}` : ''}
총금액: ₱${total.toLocaleString()}

🧸 주문내역:
${sortedItems.map(i => `- ${i.name} x ${i.qty} = ₱${(i.price * i.qty).toLocaleString()}`).join('\n')}
    `.trim()

    // 3. 클립보드 복사
    await navigator.clipboard.writeText(orderText)

    // 4. 장바구니 비우기 및 안내
    clearCart()
    setToast(`✅ 주문이 접수되었습니다. (번호: ${data.orderId})`)

    // 5. 안내 후 카카오톡 채널로 이동
    setTimeout(() => {
      alert("주문 정보가 클립보드에 복사되었습니다.\n카카오톡 채널에 들어가 붙여넣기 후 메시지를 전송해주세요.")
      window.open("http://pf.kakao.com/_Pnebn/chat", "_blank")
    }, 300) // 약간의 지연 후 실행

  } catch (err) {
    console.error(err)
    setToast('❌ 주문 접수 중 오류가 발생했습니다.')
  } finally {
    setIsSubmitting(false)
  }
}
