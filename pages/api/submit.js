// pages/api/submit.js
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

    const orderId   = `TAG${new Date().toISOString().slice(0,10).replace(/-/g,'')}${Math.floor(Math.random()*900)+100}`
    const timestamp = new Date().toISOString()
    const total     = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const row       = [orderId, timestamp, name, phone, kakaoId, deliveryType, address || '', JSON.stringify(items), total]

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: '주문내역!A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [row] },
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
