import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Logo } from '@components/Logo'
import { CartContext } from '@contexts/CartContext'

export function Header() {
  const { totalAmountOfProducts } = useContext(CartContext)

  return (
    <header className="w-full fixed top-0 bg-gray-100">
      <div className="max-w-[1160px] py-8 px-5 mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="flex gap-3 items-center">
          <Link
            to="/checkout"
            className="group p-2 flex items-center gap-1 text-purple-600 bg-purple-100 rounded-[6px] font-base leading-snug text-sm transition-colors hover:bg-purple-300 hover:text-white"
          >
            <MapPin
              size={20}
              weight="fill"
              className="text-purple-300 group-hover:text-white transition-colors"
            />
            Porto Alegre, RS
          </Link>
          <Link
            to="/checkout"
            aria-label="Carrinho"
            className="group p-2 flex items-center text-yellow-600 bg-yellow-100 rounded-[6px] transition-colors relative hover:bg-yellow-600 hover:text-white"
          >
            <ShoppingCart size={20} weight="fill" />
            <span className="w-5 h-5 rounded-full bg-yellow-600 text-white font-base leading-snug text-xs font-bold flex items-center justify-center absolute top-[-8px] right-[-8px]">
              {totalAmountOfProducts}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
