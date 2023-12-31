import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { IProductItem } from '@reducers/Cart/reducer'

import ConfirmationImage from '@assets/ConfirmationImage.png'

interface IOrderInformation {
  orderItens: IProductItem[]
  paymentMethod: string
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

export function Confirmation() {
  const [orderInformation, setOrderInformation] =
    useState<null | IOrderInformation>(null)

  const navigate = useNavigate()

  useEffect(() => {
    const orderData = localStorage.getItem('@coffe-delivery:order')

    if (orderData) {
      setOrderInformation(JSON.parse(orderData))
    } else {
      navigate('/')
    }
  }, [navigate])

  return (
    <main className="max-w-[1160px] px-5 mx-auto mb-24 md:mt-24">
      <div className="grid grid-cols-2 gap-8 items-end mt-[144px] lg:grid-cols-1">
        <div className="lg:order-2">
          <h1 className="font-heading font-extrabold text-[32px] leading-snug text-yellow-600 mb-1">
            Uhu! Pedido confirmado
          </h1>
          <p className="font-base text-xl leading-snug text-gray-800 mb-10">
            Agora é só aguardar que logo o café chegará até você
          </p>
          <article className="flex flex-col gap-8 p-10 border border-yellow-300 rounded-tl-[6px] rounded-tr-[44px] rounded-bl-[44px] rounded-br-[6px]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-full bg-purple-300 text-white">
                <MapPin weight="fill" size={16} />
              </div>
              <p>
                Entrega em{' '}
                <strong>
                  {orderInformation?.rua}, {orderInformation?.numero}
                </strong>
                <br /> {orderInformation?.bairro} - {orderInformation?.cidade},{' '}
                {orderInformation?.uf}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-full bg-yellow-300 text-white">
                <Timer weight="fill" size={16} />
              </div>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-full bg-yellow-600 text-white">
                <CurrencyDollar weight="fill" size={16} />
              </div>
              <p>
                Pagamento na entrega
                <br />
                <strong>{orderInformation?.paymentMethod}</strong>
              </p>
            </div>
          </article>
        </div>
        <img
          className="justify-self-end lg:justify-self-center lg:order-1"
          src={ConfirmationImage}
          alt=""
        />
      </div>
    </main>
  )
}
