import { useContext } from 'react'

import { CartContext } from '@contexts/CartContext'

import { DeliveryForm } from './components/DeliveryForm'
import { OrderConfirmation } from './components/OrderConfirmation'

export function Checkout() {
  const { products } = useContext(CartContext)

  return (
    <main className="max-w-[1160px] px-5 mx-auto grid grid-cols-checkout gap-8 mt-[144px] lg:grid-cols-1">
      <DeliveryForm />
      <OrderConfirmation products={products} />
    </main>
  )
}
