import * as React from 'react'
import { Nav } from '../components'

export function Header() {
  return (
    <header className="bg-white fixed inset-x-0 top-0 z-50">
      <Nav />
    </header>
  )
}
