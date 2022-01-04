import Image from 'next/image'

import Container from 'components/Container'
import Button from 'components/Button'
import Nav from './Nav'
import NavBurger from './NavBurger'
import elemesLogo from 'public/assets/elemes-logo.png'

const Header = () => {
  return (
    <header className='h-[77px] bg-white shadow-lg p-4'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <Image
              src={elemesLogo}
              alt='Elemes Logo'
              placeholder='blur'
              height='37'
              width='150'
            />
          </div>
          <div className='md:flex hidden '>
            <Nav />
          </div>

          <div className='md:flex hidden gap-1'>
            <Button outlined>Masuk</Button>
            <Button>Daftar Sekarang</Button>
          </div>

          <NavBurger />
        </div>
      </Container>
    </header>
  )
}

export default Header
