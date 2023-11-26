import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { AmountCounter } from './AmountCounter'

interface ICoffeeItem {
  imageURL: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeItem({
  imageURL,
  tags,
  title,
  description,
  price,
}: ICoffeeItem) {
  const [itemAmount, setItemAmount] = useState(1)

  const formatedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <li className="bg-gray-200 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">
      <header className="flex flex-col gap-3 items-center justify-center mt-[-20px] mb-4">
        <img
          src={imageURL}
          alt=""
          className="w-[120px] h-[120px] object-cover"
        />
        <ul className="flex gap-1 font-base text-xs leading-snug uppercase font-bold text-yellow-600">
          {tags.map((tag) => (
            <li key={tag} className="px-2 py-1 bg-yellow-100 rounded-full">
              {tag}
            </li>
          ))}
        </ul>
      </header>
      <main className="flex flex-col gap-2 items-center justify-center px-5 mb-8">
        <h3 className="font-heading text-xl leading-snug font-bold text-gray-800 text-center">
          {title}
        </h3>
        <p className="font-base text-sm leading-snug text-gray-600 text-center">
          {description}
        </p>
      </main>
      <footer className="flex justify-between px-6 pb-5">
        <strong className="font-heading text-2xl leading-snug font-extrabold text-gray-700">
          {formatedPrice}
        </strong>
        <div className="flex gap-2">
          <AmountCounter amount={itemAmount} setAmount={setItemAmount} />
          <button
            aria-label="Carrinho"
            className="p-2 flex items-center text-gray-200 bg-purple-600 rounded-[6px] transition-colors hover:bg-purple-300"
          >
            <ShoppingCart size={20} weight="fill" />
          </button>
        </div>
      </footer>
    </li>
  )
}
