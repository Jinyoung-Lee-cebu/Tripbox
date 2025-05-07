// components/HowItWorks.jsx

export default function HowItWorks() {
  const steps = [
    { number: '1', lines: ['상품 선택'] },
    { number: '2', lines: ['My Box 담기'] },
    { number: '3', lines: ['주문 확정', '(픽업 or 배송 선택)'] },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold text-left mb-6">How It Works</h2>
        <div className="flex justify-between items-start">
          {steps.map((step, idx) => {
            // 1번·2번만 2rem 오른쪽 이동
            const offset = idx < 2 ? 'relative left-8' : '';
            return (
              <div
                key={step.number}
                className={`${offset} flex flex-col items-center`}
              >
                <div className="bg-purple-800 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold">
                  {step.number}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800 text-center whitespace-pre-line">
                  {step.lines.join('\n')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
