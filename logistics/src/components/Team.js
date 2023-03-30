import React from 'react'
import { transporters } from '../data'
const Team = () => {
  return (
    <section className='pb-12'>
      <div className='flex flex-col mx-8 xl:mx-48 gap-4'>
        <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[120px] items-center mx-auto'>
          <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
          <p className='text-[#1C1F35] text-sm font-semibold'>
            The Transporters
          </p>
        </div>
        <h3 className='text-2xl font-bold w-md text-center mx-auto text-[#1C1F35]'>
          Safe & Reliable Cargo Solutions
        </h3>
        <div className='flex gap-8'>
          {transporters.map((item) => {
            const { id, name, profession, social, img } = item
            return (
              <div key={id} className='flex  flex-col relative'>
                <img src={img} alt='' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
