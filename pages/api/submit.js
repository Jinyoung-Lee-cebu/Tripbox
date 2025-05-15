import { google } from 'googleapis'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, phone, kakaoId, items, deliveryType, address } = req.body
  const sheetId     = process.env.GOOGLE_SHEET_ID
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey  = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')

  try {
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // ✅ 헤더 확인 → 없으면 삽입
    const headerRange = `'Online order'!A1:K1`
    const headerCheck = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: headerRange,
    })

    if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: headerRange,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[
            '주문번호', '주문시간', '이름', '전화번호', '카카오 ID',
            '수령 방식', '배송 주소', '상품명', '수량', '금액', '총'
          ]]
        }
      })
    }

    // ✅ 주문번호 생성 (중복 방지)
    const now = new Date()

    // ✅ 필리핀 시간대 기준으로 시간 포맷
    const timeStr = now.toLocaleTimeString('en-PH', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Manila',
    })

    const dateStr = now.toLocaleDateString('en-PH', {
      timeZone: 'Asia/Manila',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '')

    const fixedDateStr = `${dateStr.slice(4, 8)}${dateStr.slice(0, 2)}${dateStr.slice(2, 4)}` // YYYYMMDD

    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `'Online order'!A:A`,
    })

    const todayCount = readRes.data.values?.filter(row =>
      row[0]?.startsWith(`TB${fixedDateStr}`)
    ).length || 0

    const orderId = `TB${fixedDateStr}${String(todayCount + 1).padStart(4, '0')}`
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

    const rows = items.map(item => ([
      orderId,
      timeStr,
      name,
      phone,
      kakaoId,
      deliveryType,
      deliveryType === 'pickup' ? '-' : (address || ''),
      item.name,
      item.qty,
      item.price * item.qty,
      total
    ]))

    // ✅ 주문 행 추가
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `'Online order'!A:K`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: rows },
    })

    // ✅ Google Apps Script 자동 병합 호출
    await fetch('https://script.google.com/macros/s/AKfycbxwhBPf7nFJdkVzGNs76OXoKoJPvgAQCVjRG8CzatjAhVFKjat-B8gThgy2o_XS_gq_tQ/exec')

    return res.status(200).json({ message: '주문이 스프레드시트에 저장되었습니다.', orderId })
  } catch (error) {
    console.error('Google Sheets API error:', error)
    return res.status(500).json({
      message: '스프레드시트 저장 중 오류',
      error: error.message,
    })
  }
}
