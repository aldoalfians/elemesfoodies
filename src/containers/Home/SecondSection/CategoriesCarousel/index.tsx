import Image from 'next/image'

import Carousel from 'react-multi-carousel'
import { listProductCategories } from '../../../../data/dummyData'

import React from 'react'

const CategoriesCarousel = () => {
  return (
    <>
      <div className='p-5'>
        <h3 className='text-heading-3 text-dark font-sans pt-14'>
          Browser Our Category
        </h3>
        <h4 className='text-heading-4 text-primary-green font-sans'>Receipt</h4>
      </div>

      <Carousel
        className='py-5'
        containerClass='carousel-container'
        arrows
        centerMode={false}
        draggable
        swipeable
        customRightArrow={
          <button
            type='button'
            aria-label='Go to next slide'
            className='absolute z-50 right-0 opacity-50 hover:opacity-100'
          >
            <img
              src='/assets/icons/right-arrow-rounded.svg'
              height='75'
              width='75'
            />
          </button>
        }
        customLeftArrow={
          <button
            type='button'
            aria-label='Go to previous slide'
            className='absolute z-50 left-0 opacity-50 hover:opacity-100'
          >
            <img
              src='/assets/icons/left-arrow-rounded.svg'
              height='75'
              width='75'
            />
          </button>
        }
        partialVisbile
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 720,
            },
            items: 3,
            partialVisibilityGutter: 100,
          },
        }}
      >
        {listProductCategories.map((category) => {
          return (
            <div
              className={`${category.bgColor} hover:drop-shadow-2xl p-8 rounded-xl gap-1 mx-1`}
            >
              <div className='flex flex-col items-center justify-center gap-2'>
                <img
                  src={category.iconUrl}
                  alt={category.title}
                  className='w-30 h-30'
                />
                <p className='text-heading-5 text-dark font-sans'>
                  {category.title}
                </p>
                <p className='text-heading-6 text-dark font-sans'>
                  {category.itemLength} items
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default CategoriesCarousel
