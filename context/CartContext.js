import React, { createContext, useContext, useReducer } from 'react'

const ADD = 'ADD'
const REMOVE = 'REMOVE'
const CLEAR = 'CLEAR'

function cartReducer(state, action) {
  switch (action.type) {
    case ADD: {
      const { product, qty } = action.payload
      const existing = state.items.find(i => i.id === product.id)

      if (existing) {
        const updatedQty = existing.qty + qty

        // ❌ 수량 0 이하여도 삭제하지 않고 0으로 유지
        return {
          items: state.items.map(i =>
            i.id === product.id
              ? { ...i, qty: Math.max(0, updatedQty) }
              : i
          ),
        }
      }

      // 새 상품 추가
      return { items: [...state.items, { ...product, qty: Math.max(0, qty) }] }
    }

    case REMOVE:
      return { items: state.items.filter(i => i.id !== action.payload) }

    case CLEAR:
      return { items: [] }

    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const CartStateContext = createContext()
const CartDispatchContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addToCart = (product, qty) =>
    dispatch({ type: ADD, payload: { product, qty } })

  const removeFromCart = id =>
    dispatch({ type: REMOVE, payload: id })

  const clearCart = () =>
    dispatch({ type: CLEAR })

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={{ addToCart, removeFromCart, clearCart }}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

export function useCart() {
  const state = useContext(CartStateContext)
  const dispatchers = useContext(CartDispatchContext)

  if (!state || !dispatchers) {
    throw new Error('useCart must be used within CartProvider')
  }

  return { items: state.items, ...dispatchers }
}
