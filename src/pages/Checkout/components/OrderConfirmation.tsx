import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CartContext } from '@contexts/CartContext'

import { CoffeeItemCheckout } from '@/components/CoffeeItemCheckout'
import { NumberToCurrency } from '@/utils/NumberToCurrency'

export function OrderConfirmation() {
  const { products, totalPrice } = useContext(CartContext)

  const {
    formState: { errors, isSubmitting },
  } = useFormContext()

  console.log(errors)

  return (
    <section>
      <h2 className="font-heading text-lg leading-snug font-bold text-gray-800 mb-4">
        Cafés selecionados
      </h2>
      <div className="bg-gray-200 flex flex-col gap-6 p-10 rounded-tl-[6px] rounded-tr-[44px] rounded-bl-[44px] rounded-br-[6px]">
        <ul className="flex flex-col gap-6">
          {products.map((item) => (
            <CoffeeItemCheckout
              key={item.id}
              id={item.id}
              title={item.title}
              imageURL={item.imageURL}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <p className="font-base text-gray-700 text-sm leading-snug flex items-center justify-between">
            Total de itens:
            <span className="text-base">{NumberToCurrency(totalPrice)}</span>
          </p>
          <p className="font-base text-gray-700 text-sm leading-snug flex items-center justify-between">
            Entrega: <span className="text-base">R$ 3,50</span>
          </p>
          <strong className="font-base font-bold text-gray-800 text-xl leading-snug flex items-center justify-between">
            Total: <span>{NumberToCurrency(totalPrice + 3.5)}</span>
          </strong>
          <button
            className="mt-3 py-3 px-2 rounded-[6px] bg-yellow-300 text-white font-base font-bold text-sm leading-relaxed uppercase transition-colors hover:bg-yellow-600 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-yellow-300"
            disabled={!errors || isSubmitting}
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </section>
  )
}
