import Image from 'next/image'

import Button from 'components/Button'
import Container from 'components/Container'
import foodLogo from 'public/assets/food-elemes-id.png'
import styles from './TopSection.module.css'
import Rating from 'components/Rating'

const TopSection = () => {
  return (
    <section>
      <Container>
        <div className='lg:flex justify-between  pt-[112px] pb-[58px] '>
          <div className='flex flex-col mb-[80px] px-5'>
            <h1 className='text-heading-1 font-bold font-sans text-primary-moss xl:w-[400px] mb-3'>
              Good Food Us Good Mood
            </h1>
            <p className='xl:text-heading-4 font-sans text-gray sm:w-[500px]  mb-7'>
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <div className='flex gap-2'>
              <Button>Daftar Sekarang</Button>
              <Button outlined>About Us</Button>
            </div>
          </div>
          <div className='flex justify-center '>
            <figure className='md:flex-shrink-0 text-center '>
              <Image
                src={foodLogo}
                alt='Elemes Logo'
                placeholder='blur'
                className='xl:w-[400px] xl:h-[400px] lg:object-center'
              />
            </figure>
            <div className={styles.Card__section}>
              <Image
                src={foodLogo}
                alt='Elemes Logo'
                placeholder='blur'
                height='50'
                width='50'
              />
              <div className='flex flex-col mx-2'>
                <p className='font-bold font-sans text-heading-5 text-dark'>
                  Green Salad Tomato
                </p>
                <span className='text-heading-6 text-gray'>Tomato</span>
                <Rating value={4} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TopSection
