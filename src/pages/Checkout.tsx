import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export function Checkout() {
  const { products } = useContext(CartContext)

  return <div>{JSON.stringify(products, null, 2)}</div>
}
