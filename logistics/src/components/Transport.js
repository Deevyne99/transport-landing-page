import React from 'react'
import { transport } from '../data'
const Transport = () => {
  return (
    <section className='flex flex-col  gap-8 py-12 '>
      <h3 className='text-center text-2xl font-bold'>
        Transporting Across The World
      </h3>
      <article className='mx-24 flex gap-3 mb-[-120px]'>
        {transport.map((item) => {
          const { img, id, title, text } = item
          return (
            <div className='flex flex-col relative w-sm  ' key={id}>
              <img className='relative ' src={img} alt='' />
              <div class='absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900'></div>
              <div className=' absolute  bottom-2 flex flex-col w-full '>
                <strong className='ml-[20px] text-sm  text-white'>
                  {title}
                </strong>
                <p className='ml-[20px] text-sm text-[#FFB629]'>{text}</p>
              </div>
            </div>
          )
        })}
      </article>
      <div className='flex h-[300px]  bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'>
        <div className='flex items-center justify-center capitalize font-semibold  relative w-[160px] py-6 h-[25px] bg-darkBlue text-white mx-auto mt-36'>
          More work
          <div className='bg-[#1F2A69] absolute bottom-0 right-0 h-[25px] w-[25px]  rounded-l-md  rotate-[270deg] rounded-t-full  '></div>
        </div>
      </div>
    </section>
  )
}

export default Transport
