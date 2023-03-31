import React from 'react'
import { transporters } from '../data'
const Team = () => {
  return (
    <section className='pb-12'>
      <div className='flex flex-col mx-20 xl:mx-48 gap-4'>
        <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[125px] items-center mx-auto'>
          <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
          <p className='text-[#1C1F35] text-sm  font-Rubik'>The Transporters</p>
        </div>
        <h3 className='text-3xl font-bold w-md font-Rubik text-center mx-auto text-[#1C1F35]'>
          Meet Expert Team
        </h3>
        <div className='flex gap-8 w-full'>
          {transporters.map((item) => {
            const { id, name, profession, social, img } = item
            const socialLinks = Object.values(social)
            return (
              <div key={id} className='flex w-[400px] flex-col relative'>
                <img src={img} className='w-[400px]' alt='' />
                <div className='absolute h-18 bottom-0 w-full bg-[#1C1F35]'>
                  <div className='p-4 text-white'>
                    <p className='text-md font-Rubik font-semibold '>{name}</p>
                    <p className='text-sm font-thin font-krub'>{profession}</p>
                  </div>
                </div>
                <div className='absolute flex gap-2 items-center p-2 h-12 w-30 bottom-12 right-0 bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'>
                  {socialLinks.map((item) => {
                    return <img src={item} alt='' className='w-[16px]' />
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
