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
        <div className='flex mx-8 xl:mx-48 justify-between'>
          <div className='flex flex-col'>
            <div className='flex h-[25px] bg-[#1F2A69] gap-2  bg-opacity-50 w-[80px] items-center'>
              <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
              <p className='text-white text-sm'>Contact</p>
            </div>
            <div className='flex flex-col gap-2 justify-between mt-2 text-[#fff]'>
              <h3 className='text-3xl font-bold w-md '>Get in touch with us</h3>
              <p className='max-w-sm text-sm'>
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
                          <p>{title}</p>
                          <p>{text}</p>
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
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683]'
                  type='text'
                />
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683]'
                  type='text'
                />
              </div>
              <div className='flex gap-4   justify-between'>
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683]'
                  type='text'
                />
                <input
                  className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683]'
                  type='text'
                />
              </div>
              <textarea
                className='w-full bg-[#091242] border-[1px] border-[#4E5683]'
                name=''
                id=''
                cols='2'
                rows='5'
              ></textarea>
              <button className='w-[140px] bg-red-300 p-2 bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% font-semibold'>
                Submit message
              </button>
            </form>
          </div>
        </div>
        <div className='flex  items-center mt-10 mx-8 xl:mx-48 justify-center'>
          <img className='max-w-[232px]' src={green} alt='' />
          <img className='max-w-[232px]' src={norto} alt='' />
          <img src={points} alt='' className='max-w-[232px]' />
          <img src={snow} alt='' className='max-w-[232px]' />
        </div>
      </div>
    </section>
  )
}

export default Contact
