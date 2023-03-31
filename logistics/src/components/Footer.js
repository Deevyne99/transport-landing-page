import React from 'react'
import logo from '../images/Logo.png'
import { companyInfo } from '../data'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
const Footer = () => {
  return (
    <section>
      <div className='bg-sea h-[300px] bg-no-repeat bg-center bg-cover bg-full'></div>
      <footer className='bg-[#091242]  flex flex-col'>
        <header className='bg-[#FFFFFF14]  w-full h-[50px] flex items-center '>
          <nav
            className='lg:mx-20 xl:mx-48 flex gap-36  items-center 
          w-full '
          >
            <div className='bg-[#091242] w-[190px] p-4'>
              <img src={logo} className='w-32' alt='' />
            </div>
            <ul className=' flex group text-white lg:gap-20 font-Rubik text-md'>
              <li>
                <a href='#0'>Pages</a>
              </li>

              <li>
                <a href='#0'>Utility</a>
              </li>
              <li>
                <a href='#0'>Subscribe </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className='flex mt-4 mx-20 xl:mx-48 gap-14 pb-8'>
          <article>
            <p className='max-w-[280px] text-sm text-[#E8E8E8] font-krub leading-5'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <div className='flex flex-col justify-between gap-4 mt-4 text-[#fff] text-sm'>
              {companyInfo
                .map((info) => {
                  const { id, title, icon, text } = info
                  return (
                    <article key={id}>
                      <div className='flex gap-4 items-center text-[#fff] font-krub'>
                        <img src={icon} className='w-[50px]' alt='' />
                        <div>
                          <p>{title}</p>
                          <p>{text}</p>
                        </div>
                      </div>
                    </article>
                  )
                })
                .slice(1, 3)}
            </div>
          </article>
          <div className=''>
            <ul className=' flex flex-col group text-white lg:gap-3 text-sm font-krub'>
              <li>
                <a href='#0'>About Us</a>
              </li>

              <li>
                <a href='#0'>Our Team</a>
              </li>
              <li>
                <a href='#0'>Our Project</a>
              </li>
              <li>
                <a href='#0'>Pricing</a>
              </li>
              <li>
                <a href='#0'>Contact </a>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className=' flex flex-col group text-white lg:gap-3 font-krub text-sm '>
              <li>
                <a href='#0'>Style Guide</a>
              </li>

              <li>
                <a href='#0'>Changelog</a>
              </li>
              <li>
                <a href='#0'>Licenses</a>
              </li>
              <li>
                <a href='#0'>Protected</a>
              </li>
              <li>
                <a href='#0'>Not Found</a>
              </li>
            </ul>
          </div>
          <div className='flex items-start flex-col'>
            <input
              className='w-[250px] p-2 bg-[#091242] border-[1px] border-[#4E5683]'
              type='text'
            />
            <div className='flex mt-4 items-center gap-4'>
              <button className='w-[140px] bg-red-300 p-2 bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116% font-semibold text-[#23212A]'>
                Send Now
              </button>
              <div className='flex gap-4  items-center'>
                <img src={linkedin} className='w-4' alt='' />
                <img src={facebook} className='w-4' alt='' />
                <img src={twitter} className='w-4' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full border-t-[1px]  border-[#4E5683]'>
          <div className='flex mx-20 xl:mx-48 py-4 justify-between items-center'>
            <p className='text-[#FFFFFF] text-sm font-krub'>
              Copyright © TransitFlow | Designed by VictorFlow - Powered by
              Webflow.
            </p>
            <div className='flex gap-6 text-[#8388A7] capitalize font-krub'>
              <p>style guide </p>
              <p>liscense</p>
              <p>changelog</p>
              <p>password</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
