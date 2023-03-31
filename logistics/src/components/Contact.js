import React from 'react'
import { companyInfo } from '../data'
import green from '../images/green.png'
import norto from '../images/norto.png'
import points from '../images/points.png'
import snow from '../images/snow.png'
const Contact = () => {
  return (
    <section className='pb-12 '>
      <div className='bg-[#091242] flex flex-col py-20 '>
        <div className='flex mx-20 xl:mx-48 justify-between'>
          <div className='flex flex-col'>
            <div className='flex h-[25px] bg-[#1F2A69] gap-2  bg-opacity-50 w-[80px] items-center'>
              <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
              <p className='text-white text-sm font-Rubik'>Contact</p>
            </div>
            <div className='flex flex-col gap-2 justify-between mt-2 text-[#fff]'>
              <h3 className='text-3xl font-bold w-md font-Rubik'>
                Get in touch with us
              </h3>
              <p className='max-w-sm text-sm w-[310px] font-krub font-thin'>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
              <div className='flex flex-col justify-between gap-4 mt-2 text-[#fff] text-sm'>
                {companyInfo.map((info) => {
                  const { id, title, icon, text } = info
                  return (
                    <article key={id}>
                      <div className='flex gap-4 items-center'>
                        <img src={icon} className='w-[50px]' alt='' />
                        <div>
                          <p className='font-krub'>{title}</p>
                          <p className='font-krub'>{text}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='w-1/2 mt-8'>
            <form className='w-full flex gap-4 flex-col'>
              <div className='flex gap-4   justify-between'>
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683] placeholder:text-white placeholder:indent-4'
                  type='text'
                  placeholder='Your name*'
                />
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683] placeholder:text-white placeholder:indent-4'
                  type='text'
                  placeholder='Email*'
                />
              </div>
              <div className='flex gap-4   justify-between'>
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683] placeholder:text-white placeholder:indent-4'
                  type='text'
                  placeholder='Phone Number*'
                />
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683] placeholder:text-white placeholder:indent-4'
                  type='text'
                  placeholder='City*'
                />
              </div>
              <textarea
                className='w-full bg-[#091242] border-[1px] border-[#4E5683] placeholder:text-white placeholder:indent-4 pt-2'
                name=''
                id=''
                cols='2'
                rows='5'
                placeholder='Your Message'
              ></textarea>
              <button className='w-[140px] bg-red-300 p-2 bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%  font-krub text-[#23212A]'>
                Submit message
              </button>
            </form>
          </div>
        </div>
        <div className='flex  items-center mt-10 mx-20 xl:mx-48 justify-center'>
          <img
            className='xl:max-w-[232px] lg:max-w-[208px]'
            src={green}
            alt=''
          />
          <img className='max-w-[232px] lg:max-w-[208px]' src={norto} alt='' />
          <img src={points} alt='' className='max-w-[232px] lg:max-w-[208px]' />
          <img src={snow} alt='' className='max-w-[232px] lg:max-w-[208px]' />
        </div>
      </div>
    </section>
  )
}

export default Contact
