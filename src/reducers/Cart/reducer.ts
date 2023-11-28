/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from './actions'

export interface IProductItem {
  id: number
  imageURL: string
  tags: string[]
  title: string
  description: string
  price: number
  amount: number
}

export function CartReducer(state: IProductItem[], action: any) {
  const productIndexInCart = state.findIndex(
    (item) => item.id === action.payload.productId,
  )

  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT_TO_CART:
      if (productIndexInCart !== -1) {
        const updatedCart = [...state]
        updatedCart[productIndexInCart] = {
          ...updatedCart[productIndexInCart],
          amount:
            updatedCart[productIndexInCart].amount +
            action.payload.product.amount,
        }
        return updatedCart
      }
      return [...state, action.payload.product]
    case ActionTypes.INCREASE_PRODUCT_AMOUNT:
      if (productIndexInCart !== -1) {
        const updatedCart = [...state]
        updatedCart[productIndexInCart] = {
          ...updatedCart[productIndexInCart],
          amount: updatedCart[productIndexInCart].amount + 1,
        }
        return updatedCart
      }
      return state
    case ActionTypes.DECREASE_PRODUCT_AMOUNT:
      if (productIndexInCart !== -1) {
        const updatedCart = [...state]
        updatedCart[productIndexInCart] = {
          ...updatedCart[productIndexInCart],
          amount: updatedCart[productIndexInCart].amount - 1,
        }
        return updatedCart
      }
      return state
    case ActionTypes.DELETE_PRODUCT_FROM_CART:
      if (productIndexInCart !== -1) {
        const updatedCart = [...state]
        delete updatedCart[productIndexInCart]
        return updatedCart
      }
      return state
    default:
      return state
  }
}
