import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CartContext } from '@contexts/CartContext'

import { DeliveryForm } from './components/DeliveryForm'
import { OrderConfirmation } from './components/OrderConfirmation'

const schema = z.object({
  cep: z
    .string()
    .refine((cep) => cep.trim().replace(/_/gi, '').length === 9, {
      message: 'Digite um CEP válido',
    })
    .refine((cep) => cep.trim().length > 0, {
      message: 'Esse campo é obrigatório',
    })
    .optional(),
  rua: z
    .string()
    .refine((rua) => rua.trim().length > 0, {
      message: 'Esse campo é obrigatório',
    })
    .optional(),
  numero: z
    .string()
    .refine((numero) => numero.trim().length > 0, {
      message: 'Esse campo é obrigatório',
    })
    .optional(),
  complemento: z.string().optional(),
  bairro: z
    .string()
    .refine((bairro) => bairro.trim().length > 0, {
      message: 'Esse campo é obrigatório',
    })
    .optional(),
  cidade: z
    .string()
    .refine((cidade) => cidade.trim().length > 0, {
      message: 'Esse campo é obrigatório',
    })
    .optional(),
  uf: z
    .string()
    .refine((uf) => uf.trim().length > 0, {
      message: 'Esse campo é obrigatório',
    })
    .optional(),
  paymentMethod: z.string(),
})
type confirmOrderFormData = z.infer<typeof schema>

export function Checkout() {
  const { products } = useContext(CartContext)

  const methods = useForm<confirmOrderFormData>({
    resolver: zodResolver(schema),
  })

  function handleFinishOrder(data: confirmOrderFormData) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <main className="max-w-[1160px] px-5 mx-auto mb-24">
      <FormProvider {...methods}>
        <form
          className="grid grid-cols-checkout gap-8 mt-[144px] lg:grid-cols-1"
          onSubmit={methods.handleSubmit(handleFinishOrder)}
        >
          <DeliveryForm />
          <OrderConfirmation />
        </form>
      </FormProvider>
    </main>
  )
}
