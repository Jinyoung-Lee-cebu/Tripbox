export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycby6TlxCPvqlfdZ7TK9sXlXvJ0426bg-K0CJuI81U6dEYrjT04AF24McsXS68gbkzget/exec';

    const response = await fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();

    if (result.status === 'success') {
      return res.status(200).json({
        message: '주문이 스프레드시트에 저장되었습니다.',
        orderId: result.orderId
      });
    } else {
      throw new Error('GAS 처리 실패');
    }
  } catch (error) {
    console.error('GAS 호출 실패:', error);
    return res.status(500).json({
      message: 'GAS 호출 중 오류 발생',
      error: error.message
    });
  }
}
