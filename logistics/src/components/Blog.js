import React from 'react'
import blog1 from '../images/blog-1.png'
import blog2 from '../images/blog-2.png'
import blog3 from '../images/blog-3.png'
import date from '../images/date.png'
const Blog = () => {
  return (
    <section className='pb-12'>
      <div className='flex flex-col mx-4 md:mx-8 lg:mx-20 xl:mx-64'>
        <div className='flex flex-col  lg:gap-2'>
          <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[80px] items-center mx-auto'>
            <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
            <p className='text-[#1C1F35] text-sm font-semibold font-Rubik'>
              Our Blog
            </p>
          </div>
          <h3 className='text-3xl font-bold font-Rubik  text-center text-[#1C1F35]'>
            Our Latest News
          </h3>
        </div>
        <article className='flex-col flex mt-4 border-t-[1px] py-4 border-t-[#D6D6D6]'>
          <div className='flex gap-2 '>
            <img src={blog1} className='w-[350px]' alt='' />
            <div className='flex flex-col  px-4 w-[120px]   border-r-[1px] border-r-[#D6D6D6]'>
              <img src={date} className='w-16 ml-2' alt='' />
              <h2 className='text-4xl mr-2 font-Rubik font-bold text-center'>
                08
              </h2>
              <p className='text-sm capitalize text-[#666C89] text-center'>
                september
              </p>
            </div>
            <div className='flex flex-col gap-2 '>
              <h5 className='px-2 text-3xl w-[370px] text-[#1C1F35] font-Rubik'>
                Inland freight a worthy solution for your business
              </h5>
              <p className='px-2 text-[#666C89] text-sm w-[300px] font-krub'>
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className='list-disc px-8 font-krub text-[#1C1F35]'>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
        </article>
        <article className='flex-col flex mt-4 border-t-[1px] py-4 border-t-[#D6D6D6]'>
          <div className='flex gap-2 '>
            <img src={blog2} className='w-[350px]' alt='' />
            <div className='flex flex-col  px-4 w-[120px]   border-r-[1px] border-r-[#D6D6D6]'>
              <img src={date} className='w-16 ml-2' alt='' />
              <h2 className='text-4xl mr-2 font-Rubik font-bold text-center'>
                12
              </h2>
              <p className='text-sm capitalize text-[#666C89] text-center'>
                september
              </p>
            </div>
            <div className='flex flex-col gap-2 '>
              <h5 className='px-2 text-3xl w-[370px] text-[#1C1F35] font-Rubik'>
                Inland freight a worthy solution for your business
              </h5>
              <p className='px-2 text-[#666C89] text-sm w-[300px] font-krub'>
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className='list-disc px-8 font-krub text-[#1C1F35]'>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
        </article>
        <article className='flex-col flex mt-4 border-t-[1px] py-4 border-t-[#D6D6D6]'>
          <div className='flex gap-2 '>
            <img src={blog3} className='w-[350px]' alt='' />
            <div className='flex flex-col  px-4 w-[120px]   border-r-[1px] border-r-[#D6D6D6]'>
              <img src={date} className='w-16 ml-2' alt='' />
              <h2 className='text-4xl mr-2 font-Rubik font-bold text-center'>
                25
              </h2>
              <p className='text-sm capitalize text-[#666C89] text-center'>
                september
              </p>
            </div>
            <div className='flex flex-col gap-2 '>
              <h5 className='px-2 text-3xl w-[370px] text-[#1C1F35] font-Rubik'>
                Inland freight a worthy solution for your business
              </h5>
              <p className='px-2 text-[#666C89] text-sm w-[300px] font-krub'>
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className='list-disc px-8 font-krub text-[#1C1F35]'>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
        </article>

        <div className='flex items-center justify-center capitalize font-semibold  relative w-[160px] py-6 mb-8 h-[25px] bg-darkBlue text-white mx-auto mt-20'>
          More blog
          <div className='bg-[#1F2A69] absolute bottom-0 right-0 h-[25px] w-[25px]  rounded-l-md  rotate-[1deg] rounded-t-full rounded-r-md'></div>
        </div>
      </div>
    </section>
  )
}

export default Blog
