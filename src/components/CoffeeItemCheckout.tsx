import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { NumberToCurrency } from '@/utils/NumberToCurrency'
import { CartContext } from '@contexts/CartContext'

import { AmountCounter } from '@components/AmountCounter'

interface ICoffeeItemCheckoutProps {
  id: number
  imageURL: string
  title: string
  price: number
  amount: number
}

export function CoffeeItemCheckout({
  id,
  imageURL,
  title,
  price,
  amount,
}: ICoffeeItemCheckoutProps) {
  const {
    increaseProductAmount,
    decreaseProductAmount,
    deleteProductFromCart,
  } = useContext(CartContext)

  return (
    <li className="flex gap-2 items-start justify-between px-1 pt-2 pb-8 border-b border-gray-400">
      <div className="flex items-center gap-5">
        <img src={imageURL} alt="" className="w-16 h-16 object-cover" />
        <div className="flex flex-col gap-2">
          <p className="font-base leading-snug text-gray-800">{title}</p>
          <div className="flex gap-2">
            <AmountCounter
              amount={amount}
              coffeInCartInfo={{
                id,
                increaseProductAmount,
                decreaseProductAmount,
              }}
            />
            <button
              aria-label="Carrinho"
              className="px-2 flex items-center gap-1 rounded-lg bg-gray-400 font-base text-xs leading-normal text-gray-700 uppercase transition-colors hover:bg-gray-500"
              onClick={() => deleteProductFromCart(id)}
            >
              <Trash size={16} className="text-purple-300" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <strong className="font-base font-bold leading-snug text-gray-700">
        {NumberToCurrency(price)}
      </strong>
    </li>
  )
}
