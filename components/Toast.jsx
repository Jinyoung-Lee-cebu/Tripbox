export default function Toast({ message }) {
  if (!message) return null

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded shadow z-50 whitespace-nowrap">
      {message}
    </div>
  )
}
