import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@layouts/defaultLayout'
import { Home } from '@pages/Home'
import { Checkout } from '@pages/Checkout'
import { Confirmation } from '@pages/Confirmation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  )
}
