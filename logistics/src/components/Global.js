import React from 'react'
import container from '../images/containers.jpg'
import plane from '../images/plane.jpg'
import photo from '../images/Photo-user.png'
import delivery from '../images/delivery.png'
import optimize from '../images/optimize.png'
const Global = () => {
  return (
    <section className='mt-8'>
      <div className='flex items-center h-[350px] w-full z-0'>
        <img src={container} alt='' />
      </div>
      <div className='relative flex-col flex lg:mx-8 xl:mx-40 p-16  bg-white mt-[-100px] z-10 h-[500px] gap-12'>
        <div className='flex gap-12'>
          <div className='flex flex-col w-1/2 gap-6'>
            <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[120px] items-center'>
              <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
              <p className='text-[#1C1F35] text-sm font-semibold'>What We Do</p>
            </div>
            <h3 className='text-3xl font-bold w-[450px] text-[#1C1F35]'>
              We provide full range global logistics solution
            </h3>
            <p className='max-w-md'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className='max-w-md'>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className='flex gap-4 items-center'>
              <img src={delivery} alt='' />
              <h6 className='text-lg font-normal'>Delivery on Time</h6>
            </div>
            <div className='flex gap-4 items-center'>
              <img src={optimize} alt='' />
              <h6 className='text-lg font-normal'>Delivery on Time</h6>
            </div>
          </div>
          <div className='relative z-10'>
            <img src={plane} alt='' />
            <div className='absolute xl:ml-[-100px] lg:ml-[-50px] xl:mt-[-180px] lg:mt-[-170px]  p-6 bg-white'>
              <img className='max-w-sm' src={photo} alt='' />
            </div>
          </div>
        </div>
        <div className='flex '>
          <div className='flex p-8 border-t-[1px] border-b-[1px] border-[#D4D4D4] w-1/2 gap-4 items-center'>
            <h3 className='text-4xl font-bold'>1294</h3>
            <div className='w-[15px] h-[15px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% '></div>
            <p>Delivery package</p>
          </div>
          <hr className='h-full w-[1px] bg-[#D4D4D4]' />
          <div className='flex p-8 border-t-[1px] border-b-[1px] w-1/2 gap-4 items-center border-[#D4D4D4]'>
            <h3 className='text-4xl  font-bold'>1294</h3>
            <div className='w-[15px] h-[15px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% '></div>
            <p>Delivery package</p>
          </div>
        </div>
        hello
      </div>
    </section>
  )
}

export default Global
