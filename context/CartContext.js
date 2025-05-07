// context/CartContext.js
import React, { createContext, useContext, useReducer } from 'react'

// 액션 타입
const ADD    = 'ADD'
const REMOVE = 'REMOVE'
const CLEAR  = 'CLEAR'

// 리듀서: 항상 state.items 가 배열이어야 합니다
function cartReducer(state, action) {
  switch (action.type) {
    case ADD: {
      const { product, qty } = action.payload
      const idx = state.items.findIndex(i => i.id === product.id)
      if (idx > -1) {
        // 이미 담긴 상품이면 수량만 합산
        const newItems = [...state.items]
        newItems[idx].qty = Math.min(99, newItems[idx].qty + qty)
        return { items: newItems }
      }
      // 신규 상품
      return { items: [...state.items, { ...product, qty }] }
    }
    case REMOVE:
      return { items: state.items.filter(i => i.id !== action.payload) }
    case CLEAR:
      return { items: [] }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const CartStateContext    = createContext()
const CartDispatchContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addToCart     = (product, qty) => dispatch({ type: ADD,    payload: { product, qty } })
  const removeFromCart = id              => dispatch({ type: REMOVE, payload: id })
  const clearCart      = ()              => dispatch({ type: CLEAR })

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={{ addToCart, removeFromCart, clearCart }}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

export function useCart() {
  const state       = useContext(CartStateContext)
  const dispatchers = useContext(CartDispatchContext)
  if (!state || !dispatchers) {
    throw new Error('useCart must be used within CartProvider')
  }
  return {
    items: state.items,
    ...dispatchers,
  }
}
