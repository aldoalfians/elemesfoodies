import React from 'react'

import NavItem from '../NavItem'
const NavBurger = () => {
  return (
    <>
      <button className='block md:hidden py-3 mx-2 focus:outline-none group'>
        <div className='w-5 h-1 bg-primary-moss mb-1'></div>
        <div className='w-4 h-1 bg-primary-moss mb-1'></div>
        <div className='w-5 h-1 bg-primary-moss mb-1'></div>
        <div className='absolute top-10 mx-8 right-full h-[300px] w-[200px] bg-white rounded-md opacity-0 transform group-focus:right-0 group-focus:opacity-90 transition-all duration-400'>
          <nav className='flex flex-col items-center w-full text-base cursor-pointer pt-3 gap-3'>
            <NavItem href='/' label='Home' />
            <NavItem href='/about' label='About' />
            <NavItem href='/promotions' label='Promotions' />
            <NavItem href='/blogs' label='Blogs' />
            <NavItem href='/contact' label='Contact Us' />
          </nav>
        </div>
      </button>
    </>
  )
}

export default NavBurger
