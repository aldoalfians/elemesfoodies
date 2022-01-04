import Image from 'next/image'

import Container from 'components/Container'
import FooterContent from './FooterContent'

import styles from './Footer.module.css'

import elemesLogo from 'public/assets/elemes-logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size='lg'>
        <div className='md:flex bg-transparent p-5'>
          <figure className='mr-[90px]'>
            <Image
              src={elemesLogo}
              alt='Elemes Logo'
              placeholder='blur'
              height='37'
              width='150'
            />
            <FooterContent
              content={[
                'Jl. Prof. DR. Satrio No.7, RT.3/RW.3',
                'Karet Kuningan, Kecamatan Setiabudi',
                'Kota Jakarta Selatan, Daerah',
                'Khusus Ibukota Jakarta 12950',
              ]}
            />
            <div className='flex gap-3 text-heading-3 my-3'>
              <i className='far fa-envelope text-primary-green hover:text-white hover:bg-primary-green rounded-full p-2'></i>
              <i className='far fa-phone-alt text-primary-green hover:text-white hover:bg-primary-green rounded-full p-2'></i>
              <i className='fab fa-instagram text-primary-green hover:text-white hover:bg-primary-green rounded-full p-2'></i>
            </div>
          </figure>

          <div className='md:flex md:flex-1 justify-between '>
            <FooterContent
              title='Categories'
              content={['Cupcake', 'Pizza', 'Kebab', 'Salmon', 'Doughnut']}
            />

            <FooterContent
              title='About us'
              content={[
                {
                  label: 'About us',
                  href: '/about',
                },
                {
                  label: 'FAQ',
                  href: '/faq',
                },
                {
                  label: 'Report Problem',
                  href: '/report-problem',
                },
              ]}
            />

            <FooterContent
              title='Newsletter'
              content={[
                'Get now free 50% discount for',
                ' all products on your first order',
              ]}
            />
          </div>
        </div>
      </Container>
      <div className='bg-primary-green p-3'>
        <p className='text-heading-5 text-white font-bold text-center'>
          © 2021 Elemes id. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
