import React from 'react'
import { about } from '../data'
const About = () => {
  return (
    <section className='py-16'>
      <div className='flex lg:mx-8 xl:mx-48'>
        <div className='flex flex-col xl:gap-8 lg:gap-8'>
          <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[120px] items-center'>
            <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
            <p className='text-[#1C1F35] text-sm font-semibold'>What We Do</p>
          </div>
          <h3 className='text-3xl font-bold w-[300px] text-[#1C1F35]'>
            Safe & Reliable Cargo Solutions
          </h3>
        </div>
        <article className='grid grid-cols-2 lg:gap-4 xl:gap-12 justify-center  '>
          {about.map((item) => {
            const { id, text, title, img } = item
            return (
              <div className='flex gap-4  xl:w-[400px] ' key={id}>
                <img className='xl:w-[50px] lg:w-[55px]' src={img} alt='' />
                <hr className='w-[1px] bg-[#D8D8D8] h-full' />
                <div className='flex flex-col '>
                  <h6 className='font-bold'>{title}</h6>
                  <p>{text}</p>
                </div>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default About
