import React from 'react'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-[50px] leading-10 font-[montserrat] font-bold'>I don’t know how to put</p>
      <p className='text-[50px] leading-[65px] font-[montserrat] font-black text-[#009EFD] '>NEXUS CLUB</p>
      <div className='mt-5'>
        <Link className='border-solid border-[1px] py-1  mx-[10px] px-[15px] rounded-[5px] text-black bg-white' href='/about'>
          click me
        </Link>
        <Link className='border-solid mx-[10px] py-[3px] px-[6px] rounded-[5px] bg-secondary' href='/about'>
          click button
        </Link>
      </div>
    </div>
  )
}

export default Hero