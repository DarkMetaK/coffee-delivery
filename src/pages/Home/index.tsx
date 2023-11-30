import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import HeroImage from '@assets/hero-image.png'
import { database } from '@/db'

import { CoffeeItemDisplay } from '@components/CoffeeItemDisplay'

export function Home() {
  return (
    <main className="max-w-[1160px] px-5 mx-auto">
      <section className="flex gap-14 items-center flex-wrap-reverse mb-24 mt-48 md:flex-col md:mb-12 md:mt-24 sm:gap-8">
        <div className="flex-1 md:order-2">
          <h1 className="font-heading text-5xl leading-snug font-extrabold mb-4 text-gray-900 sm:text-[32px]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl leading-snug text-gray-800 mb-14 sm:text-base sm:mb-8">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-5 text-base leading-snug text-gray-700 sm:grid-cols-1">
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center p-2 rounded-full bg-yellow-600">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-gray-100"
                />
              </span>{' '}
              Compra simples e segura
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center p-2 rounded-full bg-gray-700">
                <Package size={16} weight="fill" className="text-gray-100" />
              </span>{' '}
              Embalagem mantém o café intacto
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center p-2 rounded-full bg-yellow-300">
                <Timer size={16} weight="fill" className="text-gray-100" />
              </span>{' '}
              Entrega rápida e rastreada
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center p-2 rounded-full bg-purple-300">
                <Coffee size={16} weight="fill" className="text-gray-100" />
              </span>{' '}
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img
          src={HeroImage}
          alt="Imagem de um copo de café branco e preto, com o nome Coffee Delivery estampado. O copo está posicionado em um fundo amarelo meio oval, com detalhes em roxo. No canto inferior direito do copo, temos alguns grãos de café espalhados. No canto inferior direito do copo, temos dois recipientes pretos, um com pó de café e outro em cima de folhas com mais grãos de café. Também há uma colher com pó de café próxima dos recipientes."
          className="md:order-1"
        />
      </section>
      <section className="pt-8 pb-32">
        <h2 className="font-heading text-[32px] leading-snug font-extrabold mb-8 text-gray-800">
          Nossos cafés
        </h2>

        <ul className="grid grid-cols-autofit gap-y-10 gap-x-8">
          {database.map((item) => (
            <CoffeeItemDisplay
              key={item.id}
              id={item.id}
              imageURL={item.imageURL}
              tags={item.tags}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
