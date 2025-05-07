// pages/api/test-sheet.js
import { google } from 'googleapis'

export default async function handler(req, res) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key:   process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })
    const sheets = google.sheets({ version: 'v4', auth })
    const meta   = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      includeGridData: false,
    })
    res.status(200).json({
      title:  meta.data.properties.title,
      sheets: meta.data.sheets.map(s => s.properties.title),
    })
  } catch (error) {
    console.error('TEST SHEET ERROR', error)
    res.status(500).json({ error: error.message })
  }
}
