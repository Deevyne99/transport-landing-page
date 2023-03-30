import React from 'react'
import plane from '../images/plane-photo.png'
import product from '../images/product.png'
import { details } from '../data'
console.log(details)
const Opportunity = () => {
  return (
    <section className='pb-12'>
      <div className='flex h-[550px]'>
        <div className='w-1/2 bg-[#091242]'>
          <div className='flex relative items-center flex-col xl:mt-16 lg:mt-28 xl:mr-[-230px] lg:mr-[-170px] h-[200px]'>
            <img className='xl:w-[600px] lg:w-[500px]' src={plane} alt='' />
            <img
              className='w-[200px] absolute lg:top-[264px] xl:top-[330px]'
              src={product}
              alt=''
            />
          </div>
        </div>
        <div className='w-1/2 bg-[#F4F4F4] '>
          <div className='bg-pattern mt-8 h-[200px]  w-full bg-center bg-cover bg-no-repeat'>
            <div className='flex flex-col xl:p-20 lg:p-16 ml-[30px] gap-4 '>
              <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[120px] items-center'>
                <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
                <p className='text-[#1C1F35] text-sm font-semibold'>
                  Testimonial
                </p>
              </div>
              <div className='flex flex-col gap-4 justify-between'>
                <h3 className='text-3xl font-bold w-md text-[#1C1F35]'>
                  We create opportunity to reach potential
                </h3>
                <p className='max-w-sm text-sm'>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.{' '}
                </p>
              </div>
              <div className='grid grid-cols-2 justify-center gap-4 items-center mt-6'>
                {details.map((item) => {
                  const { id, img, title } = item
                  return (
                    <div key={id} className='flex gap-2 items-center'>
                      <img
                        className='xl:w-[40px] lg:w-[30px]'
                        src={img}
                        alt=''
                      />
                      <strong className='text-sm'>{title}</strong>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opportunity
