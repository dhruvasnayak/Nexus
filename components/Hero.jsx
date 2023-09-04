import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-[40px] font-[montserrat] font-bold mt-[30px]'>I don’t know how to put</p>
      <p className='text-[40px] font-[montserrat] font-black text-[#009EFD] '>NEXUS CLUB</p>
      <div>
      <button className='border-solid border-[1px] mx-[10px] px-[15px] rounded-[5px] text-black bg-white'>click me</button>
      <button className='border-solid border-[1px] mx-[10px] px-[5px] rounded-[5px] bg-secondary'>click button</button>
      </div>
    </div>
  )
}

export default Hero