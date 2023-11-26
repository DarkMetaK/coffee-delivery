import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Logo } from './Logo'

export function Header() {
  return (
    <header className="max-w-[1160px] py-8 px-5 mx-auto flex justify-between items-center">
      <Logo />
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
          className="group p-2 flex items-center text-yellow-600 bg-yellow-100 rounded-[6px] transition-colors hover:bg-yellow-600 hover:text-white"
        >
          <ShoppingCart size={20} weight="fill" />
        </Link>
      </nav>
    </header>
  )
}
