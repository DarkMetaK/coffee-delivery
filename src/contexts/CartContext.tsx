import { ReactNode, createContext, useReducer } from 'react'

import { IProductItem, CartReducer } from '@reducers/Cart/reducer'
import {
  addProductToCartAction,
  decreaseProductAmountAction,
  deleteProductFromCartAction,
  increaseProductAmountAction,
} from '@reducers/Cart/actions'

interface ICartContextProps {
  products: IProductItem[]
  totalAmountOfProducts: number
  totalPrice: number
  addProductToCart: (product: IProductItem) => void
  increaseProductAmount: (productId: number) => void
  decreaseProductAmount: (productId: number) => void
  deleteProductFromCart: (productId: number) => void
}

interface ICartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContextProps)

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [productsState, dispatch] = useReducer(CartReducer, [])

  function addProductToCart(product: IProductItem) {
    dispatch(addProductToCartAction(product))
  }

  function increaseProductAmount(productId: number) {
    dispatch(increaseProductAmountAction(productId))
  }

  function decreaseProductAmount(productId: number) {
    dispatch(decreaseProductAmountAction(productId))
  }

  function deleteProductFromCart(productId: number) {
    dispatch(deleteProductFromCartAction(productId))
  }

  const totalAmountOfProducts = productsState.reduce<number>(
    (acc, item) => (acc += item.amount),
    0,
  )

  const totalPrice = productsState.reduce<number>((acc, item) => {
    const totalPricePerProduct = item.price * item.amount
    return (acc += totalPricePerProduct)
  }, 0)

  return (
    <CartContext.Provider
      value={{
        products: productsState,
        totalAmountOfProducts,
        totalPrice,
        addProductToCart,
        increaseProductAmount,
        decreaseProductAmount,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
