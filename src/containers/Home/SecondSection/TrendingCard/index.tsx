import { listProductTrending } from '../../../../data/dummyData'

import Button from 'components/Button'
import Rating from '../../../../components/Rating'
import styles from './TrendingCard.module.css'

const TrendingCard = () => {
  return (
    <div className='mb-36'>
      <div className='p-5'>
        <h3 className='text-heading-3 text-dark font-sans pt-14'>
          Browser Our Trending
        </h3>
        <h4 className='text-heading-4 text-primary-green font-sans'>Receipt</h4>
      </div>

      <div className='flex justify-center flex-col'>
        <div className='flex gap-2   flex-wrap'>
          {listProductTrending.map((category) => {
            return (
              <div className={`${category.bgColor} ${styles.List__Card} `}>
                <div className='flex flex-col  justify-center gap-2'>
                  <img
                    src={category.photoUrl}
                    alt={category.title}
                    className='w-20 h-20'
                  />
                  <h4 className='text-heading-4 text-dark font-sans'>
                    {category.title}
                  </h4>
                  <h5 className='text-heading-5 text-dark font-sans'>
                    {category.category}
                  </h5>
                  <Rating value={category.rating} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='flex justify-center my-10 '>
        <Button className='w-[192px]'>All Receipt</Button>
      </div>
    </div>
  )
}

export default TrendingCard
