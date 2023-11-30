import { CoffeeItemCheckout } from '@/components/CoffeeItemCheckout'

interface IProductItem {
  id: number
  imageURL: string
  tags: string[]
  title: string
  description: string
  price: number
  amount: number
}

interface IOrderConfirmationProps {
  products: IProductItem[]
}

export function OrderConfirmation({ products }: IOrderConfirmationProps) {
  return (
    <section>
      <h2 className="font-heading text-lg leading-snug font-bold text-gray-800 mb-4">
        Cafés selecionados
      </h2>
      <div className="bg-gray-200 flex flex-col gap-6 p-10 rounded-tl-[6px] rounded-tr-[44px] rounded-bl-[44px] rounded-br-[6px]">
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
      </div>
    </section>
  )
}
