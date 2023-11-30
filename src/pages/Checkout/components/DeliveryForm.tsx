import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Input } from '@/components/Input'
import { RadioInput } from '@/components/RadioInput'

export function DeliveryForm() {
  return (
    <section>
      <h2 className="font-heading text-lg leading-snug font-bold text-gray-800 mb-4">
        Complete seu pedido
      </h2>
      <div className="bg-gray-200 flex flex-col gap-8 p-10 rounded-md mb-3">
        <header className="flex gap-2 items-start">
          <MapPinLine size={20} className="text-yellow-600" />
          <div>
            <h3 className="font-base text-base leading-none text-gray-800">
              Endereço de entrega
            </h3>
            <p className="font-base text-sm leading-snug text-gray-700">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          <Input
            className="max-w-[200px] sm:max-w-none"
            placeholder="CEP"
            name="cep"
          />
          <Input placeholder="Rua" name="rua" />
          <div className="flex gap-3 flex-wrap sm:flex-col">
            <Input
              className="max-w-[200px] flex-1  sm:max-w-none"
              placeholder="Número"
              name="numero"
            />
            <Input
              placeholder="Complemento"
              className="flex-1"
              name="complemento"
            />
          </div>
          <div className="flex gap-3 flex-wrap sm:flex-col">
            <Input
              placeholder="Bairro"
              className="max-w-[200px] flex-1 sm:max-w-none"
              name="bairro"
            />
            <Input placeholder="Cidade" className="flex-1" name="cidade" />
            <Input
              placeholder="UF"
              className="max-w-[60px] flex-1 sm:max-w-none"
              name="uf"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col gap-8 p-10 rounded-md">
        <header className="flex gap-2 items-start">
          <CurrencyDollar size={20} className="text-purple-300" />
          <div>
            <h3 className="font-base text-base leading-none text-gray-800">
              Pagamento
            </h3>
            <p className="font-base text-sm leading-snug text-gray-700">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(176px,_1fr))] gap-3">
          <RadioInput
            label="Cartão de Crédito"
            icon={<CreditCard size={16} className="text-purple-300" />}
            value="creditCard"
            defaultChecked
            name="paymentMethod"
          />
          <RadioInput
            label="Cartão de Débito"
            icon={<Bank size={16} className="text-purple-300" />}
            value="debitCard"
            name="paymentMethod"
          />
          <RadioInput
            label="Dinheiro"
            icon={<Money size={16} className="text-purple-300" />}
            value="money"
            name="paymentMethod"
          />
        </div>
      </div>
    </section>
  )
}
