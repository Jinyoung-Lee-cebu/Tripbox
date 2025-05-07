// components/Toast.jsx
import React from 'react'

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  )
}
