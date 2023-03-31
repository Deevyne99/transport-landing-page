import React from 'react'
import next from '../images/next.png'
import prev from '../images/prev.png'
import smith from '../images/smith.png'
import john from '../images/john.png'
import quote from '../images/quote.png'
import star from '../images/star.png'
const Customers = () => {
  return (
    <section className='pb-12'>
      <div className='flex flex-col   gap-4 xl:mx-48 lg:mx-20'>
        <div className='flex h-[25px] bg-[#E8E8E8] gap-2  bg-opacity-50 w-[120px] items-center'>
          <div className='w-[5px] h-[25px] bg-gradient-to-r from-[#FFB629] from-[-1.21%] via-[#FFDA56] via-58% to-[#FFD7A6] to-116%'></div>
          <p className='text-[#1C1F35] text-sm font-semibold'>Testimonial</p>
        </div>
        <div className='flex items-center  justify-between'>
          <h3 className='text-3xl font-bold w-md text-[#1C1F35] font-Rubik'>
            What Our Customer Say
          </h3>
          <div className='flex'>
            <button>
              <img src={prev} alt='' />
            </button>
            <button>
              <img src={next} alt='' />
            </button>
          </div>
        </div>
        <div className='flex items-center mt-6 mx-auto'>
          <div className='w-[420px] bg-[#F4F4F4] h-[350px] flex flex-col p-12 gap-6'>
            <header className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <img className='w-[70px]' src={smith} alt='' />
                <div className='flex flex-col'>
                  <strong className='font-Rubik'>Kathleen Smith</strong>
                  <small>Fuel Company</small>
                </div>
              </div>
              <img className='w-[50px]' src={quote} alt='' />
            </header>
            <p className='text-sm text-[#666C89] font-krub italic '>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className='flex gap-1'>
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
            </div>
          </div>
          <div className='w-[420px] bg-[#091242] h-[350px] flex flex-col p-12 gap-6'>
            <header className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <img className='w-[70px]' src={john} alt='' />
                <div className='flex flex-col text-[#FFFFFF]'>
                  <strong className='font-Rubik'>John Martin</strong>
                  <small>Restoration Company</small>
                </div>
              </div>
              <img className='w-[50px]' src={quote} alt='' />
            </header>
            <p className='text-sm text-[#FFFFFF] font-krub italic'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className='flex gap-1'>
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
              <img className='w-[25px]' src={star} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customers
