import { google } from 'googleapis'

let orderCounter = 1 // 서버 재시작 시 초기화됨

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

    // 📌 헤더 확인 → 없으면 삽입
    const headerRange = '주문내역!A1:K1'
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

    // 📌 주문 데이터 구성
    const now = new Date()
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
    const timeStr = now.toTimeString().slice(0, 8)
    const orderId = `TB${dateStr}${String(orderCounter).padStart(4, '0')}`
    orderCounter++

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

    // 📌 주문 행 추가
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: '주문내역!A:K',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: rows },
    })

    return res.status(200).json({ message: '주문이 스프레드시트에 저장되었습니다.', orderId })
  } catch (error) {
    console.error('Google Sheets API error:', error)
    return res.status(500).json({
      message: '스프레드시트 저장 중 오류',
      error: error.message,
    })
  }
}
