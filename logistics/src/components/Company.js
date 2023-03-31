import React from 'react'
import logo from '../images/Logo.png'
import { companyInfo } from '../data'
const Company = () => {
  return (
    <header className='bg-darkBlue py-10 '>
      <div className='flex  lg:mx-20 xl:mx-48 justify-between  items-center'>
        <img src={logo} alt='' className='w-36' />
        <div className='flex justify-between gap-8 text-[#fff] text-sm'>
          {companyInfo.map((info) => {
            const { id, title, icon, text } = info
            return (
              <article key={id}>
                <div className='flex gap-4 items-center'>
                  <img src={icon} alt='' className='w-12' />
                  <div>
                    <p className='font-krub text-sm'>{title}</p>
                    <p className='font-krub text-sm'>{text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Company
