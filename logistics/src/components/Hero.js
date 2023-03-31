import React from 'react'
import Vector from '../images/Vector.png'
import instagram from '../images/insta.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
const Hero = () => {
  return (
    <section className='h-[800px] bg-heroImage bg-cover bg-no-repeat bg-center w-full '>
      <header className='relative flex bg-[#091242] bg-opacity-25 h-[65px] '>
        <nav className='lg:mx-20 xl:mx-48 flex justify-between font-krub items-center w-full '>
          <ul className=' flex group text-white lg:gap-4  '>
            <div className='absolute bottom-0 h-[2px] bg-white w-[40px]'></div>
            <li>
              <a href='#0'>Home</a>
            </li>
            <div className='h-[20px] bg-white w-[1px] bg-opacity-25'></div>
            <li>
              <a href='#0'>About </a>
            </li>
            <div className='h-[20px] bg-white w-[1px] bg-opacity-25'></div>
            <li>
              <a className='flex items-center gap-2' href='#0'>
                Pages <img src={Vector} alt='' />
              </a>
            </li>
            <div className='h-[20px] bg-white w-[1px] bg-opacity-25'></div>
            <li>
              <a href='#0'>Project </a>
            </li>
            <div className='h-[20px] bg-white w-[1px] bg-opacity-25'></div>
            <li>
              <a href='#0'>Contact </a>
            </li>
          </ul>
          <div className='flex gap-10   '>
            <div className='flex gap-8 items-center ml-[-100px]'>
              <img src={instagram} alt='' />
              <img src={facebook} alt='' />
              <img src={twitter} alt='' />
              <img src={linkedin} alt='' />
            </div>
            <button className='bg-white px-6 capitalize text-sm font-semibold h-[65px] font-krub'>
              Request quote
            </button>
          </div>
        </nav>
      </header>
      <article className='flex flex-col lg:mx-20 xl:mx-48 justify-center'>
        <div className='flex h-[25px] bg-[#041C37] gap-2 mt-36 bg-opacity-50 w-[210px] items-center'>
          <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
          <p className='text-white text-xs font-Rubik'>
            Logistics & Supply Chain Solutions
          </p>
        </div>
        <h2 className='text-white font-bold font-Rubik text-5xl w-[600px] leading-snug'>
          Your Gateway <br /> to any Destination <br /> in the World
        </h2>
        <p className='max-w-[460px] text-white font-normal font-krub text-sm'>
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
        </p>
        <div className='flex items-center justify-center capitalize font-normal mt-6 relative w-[160px] py-6 h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% font-krub text-[#23212A]'>
          Explore more
          <div className='bg-[#fff] absolute bottom-0 right-0 h-[25px] w-[25px]   rounded-t-full rounded-l-md rounded-r-md  rotate-[1deg] '></div>
        </div>
      </article>
    </section>
  )
}

export default Hero
