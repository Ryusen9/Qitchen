import { Menu } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='fixed top-12 left-10 border-2 z-50 p-1 rounded-xl'>
      <div className='flex items-center justify-center'>
        {/* Menu logo */}
        <div>
          <button className='flex items-center  justify-center '>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  )
}
