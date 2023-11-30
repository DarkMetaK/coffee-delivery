import { Outlet } from 'react-router-dom'

import { Header } from '@components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="mt-[104px]">
        <Outlet />
      </div>
    </>
  )
}
