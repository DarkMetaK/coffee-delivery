import { ReactNode, createContext, useState } from 'react'

interface IProductItem {
  id: number
  imageURL: string
  tags: string[]
  title: string
  description: string
  price: number
  amount: number
}

interface ICartContextProps {
  products: IProductItem[]
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
  const [products, setProducts] = useState<IProductItem[]>([])

  function addProductToCart(product: IProductItem) {
    setProducts((state) => {
      const productAlreadyAddedToCart = state.findIndex(
        (item) => item.id === product.id,
      )

      if (productAlreadyAddedToCart !== -1) {
        const updatedCart = [...state]
        updatedCart[productAlreadyAddedToCart].amount += product.amount
        return updatedCart
      }

      return [...state, product]
    })
  }

  function increaseProductAmount(productId: number) {
    setProducts((state) => {
      const productIndex = state.findIndex((item) => item.id === productId)

      if (productIndex !== -1) {
        const updatedCart = [...state]
        updatedCart[productIndex].amount += 1
        return updatedCart
      }

      return [...state]
    })
  }

  function decreaseProductAmount(productId: number) {
    setProducts((state) => {
      const productIndex = state.findIndex((item) => item.id === productId)

      if (productIndex !== -1) {
        const updatedCart = [...state]

        if (updatedCart[productIndex].amount === 1) {
          delete updatedCart[productIndex]
          return updatedCart
        }

        updatedCart[productIndex].amount -= 1
        return updatedCart
      }

      return [...state]
    })
  }

  function deleteProductFromCart(productId: number) {
    setProducts((state) => {
      const productIndex = state.findIndex((item) => item.id === productId)

      if (productIndex !== -1) {
        const updatedCart = [...state]
        delete updatedCart[productIndex]
        return updatedCart
      }

      return [...state]
    })
  }

  return (
    <CartContext.Provider
      value={{
        products,
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
