import { Minus, Plus } from 'phosphor-react'

interface IAmountCounter {
  amount: number
  setAmount?: React.Dispatch<React.SetStateAction<number>>
  coffeInCartInfo?: {
    id: number
    increaseProductAmount: (productId: number) => void
    decreaseProductAmount: (productId: number) => void
  }
}

export function AmountCounter({
  amount,
  setAmount,
  coffeInCartInfo,
}: IAmountCounter) {
  function handleReduceAmount() {
    setAmount &&
      setAmount((state) => {
        if (state > 1) {
          return (state -= 1)
        }
        return state
      })
  }

  function handleAddAmount() {
    setAmount && setAmount((state) => (state += 1))
  }

  return (
    <div className="flex gap-1 p-2 items-center bg-gray-400 rounded-[6px]">
      <button
        type="button"
        className="leading-snug text-purple-300 hover:text-purple-600"
        tabIndex={0}
        aria-hidden="false"
        aria-label="Reduzir quantidade"
        onClick={() =>
          coffeInCartInfo
            ? coffeInCartInfo.decreaseProductAmount(coffeInCartInfo.id)
            : handleReduceAmount()
        }
      >
        <Minus size={16} />
      </button>
      <div
        aria-live="polite"
        className="font-base text-base leading-snug text-gray-900"
      >
        {amount}
      </div>
      <button
        type="button"
        className="leading-snug text-purple-300 hover:text-purple-600"
        tabIndex={0}
        aria-hidden="false"
        aria-label="Aumentar quantidade"
        onClick={() =>
          coffeInCartInfo
            ? coffeInCartInfo.increaseProductAmount(coffeInCartInfo.id)
            : handleAddAmount()
        }
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
