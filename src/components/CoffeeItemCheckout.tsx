import { Trash } from 'phosphor-react'

import { AmountCounter } from '@components/AmountCounter'

interface ICoffeeItemCheckoutProps {
  id: number
  imageURL: string
  title: string
  price: number
  amount: number
}

export function CoffeeItemCheckout({
  imageURL,
  title,
  price,
  amount,
}: ICoffeeItemCheckoutProps) {
  const formatedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <li className="flex gap-2 items-start justify-between px-1 pt-2 pb-8 border-b border-gray-400">
      <div className="flex items-center gap-5">
        <img src={imageURL} alt="" className="w-16 h-16 object-cover" />
        <div className="flex flex-col gap-2">
          <p className="font-base leading-snug text-gray-800">{title}</p>
          <div className="flex gap-2">
            <AmountCounter amount={amount} setAmount={null} />
            <button
              aria-label="Carrinho"
              className="px-2 flex items-center gap-1 rounded-lg bg-gray-400 font-base text-xs leading-normal text-gray-700 uppercase transition-colors hover:bg-gray-500"
            >
              <Trash size={16} className="text-purple-300" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <strong className="font-base font-bold leading-snug text-gray-700">
        {formatedPrice}
      </strong>
    </li>
  )
}
