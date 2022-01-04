import NavItem from '../NavItem'

const Nav = () => {
  return (
    <nav className='flex items-center gap-5'>
      <NavItem href='/' label='Home' />
      <NavItem href='/about' label='About' />
      <NavItem href='/promotions' label='Promotions' />
      <NavItem href='/blogs' label='Blogs' />
      <NavItem href='/contact' label='Contact Us' />
    </nav>
  )
}

export default Nav
