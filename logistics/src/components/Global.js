import React from 'react'
import container from '../images/containers.jpg'
import plane from '../images/plane.jpg'
import photo from '../images/Photo-user.png'
import delivery from '../images/delivery.png'
import optimize from '../images/optimize.png'
const Global = () => {
  return (
    <section className='flex flex-col mt-8 h-[890px]'>
      <div className='flex items-center h-[350px] w-full z-0'>
        <img src={container} alt='' />
      </div>
      <div className='relative flex-col flex lg:mx-20 xl:mx-48 p-16  bg-white mt-[-100px] z-10 h-[500px] gap-12'>
        <div className='flex gap-12'>
          <div className='flex flex-col w-1/2 gap-3'>
            <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[70px] items-center'>
              <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
              <p className='text-[#1C1F35] text-sm font-Rubik'>Why Us</p>
            </div>
            <h3 className='text-3xl font-bold w-[450px] text-[#1C1F35] font-Rubik'>
              We provide full range global logistics solution
            </h3>
            <p className='max-w-sm text-sm text-[#666C89]'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className='max-w-sm text-sm text-[#666C89]'>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className='flex gap-4 items-center'>
              <img src={delivery} alt='' className='w-12' />
              <h6 className='text-md text-[#1C1F35] font-normal font-Rubik'>
                Delivery on Time
              </h6>
            </div>
            <div className='flex gap-4 items-center'>
              <img src={optimize} alt='' className='w-12' />
              <h6 className='text-md text-[#1C1F35] font-normal font-Rubik'>
                Delivery on Time
              </h6>
            </div>
          </div>
          <div className='relative z-10'>
            <img src={plane} alt='' />
            <div className='absolute xl:ml-[-100px] lg:ml-[-50px] xl:mt-[-180px] lg:mt-[-170px]  p-6 bg-white'>
              <img className='max-w-sm' src={photo} alt='' />
            </div>
          </div>
        </div>
        <div className='flex items-center mt-14'>
          <div className='flex p-8 border-t-[1px] border-b-[1px] border-[#D4D4D4] w-1/2 gap-4 items-center'>
            <h3 className='text-4xl font-bold font-Rubik'>1294</h3>
            <div className='w-[15px] h-[15px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% '></div>
            <p className='text-[ #1C1F35] font-leagues capitalize'>
              Delivery package
            </p>
          </div>
          <hr className='h-full w-[1px] bg-[#D4D4D4]' />
          <div className='flex p-8 border-t-[1px] border-b-[1px] w-1/2 gap-4 items-center border-[#D4D4D4]'>
            <h3 className='text-4xl  font-bold font-Rubik'>3594</h3>
            <div className='w-[15px] h-[15px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% '></div>
            <p className='text-[ #1C1F35] font-leagues capitalize'>
              Satisfied clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Global
