import React from 'react'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-[40px] leading-[30px] font-[montserrat] font-black text-[#009EFD] '>Discover Nexus</p>
        <p className='text-[20px] leading-10 font-[montserrat] font-bold'>Creating a Community of Tech Enthusiasts</p>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4 justify-center mt-[60px] items-center'>
        <div className='border-solid mx-5 border-[1px] rounded-lg border-white h-[200px] w-[200px]'>
          <div className='relative p-2 top-5 left-[20px]  w-1/4 border-solid border-[1px] rounded-[5px]'>
            <Image src="/images/icons/leaf.svg" width={120} height={120}></Image>
          </div>
          <div className='relative top-[70px] left-[20px]'>
            <p className='font-bold text-[20px]' >History</p>
            <p className='text-[10px]'>Let&apos;s see what we have done</p>
          </div>
        </div>
        <div className='border-solid mx-5 border-[1px] rounded-lg border-white h-[200px] w-[200px]'>
          <div className='relative p-2 top-5 left-[20px]  w-1/4 border-solid border-[1px] rounded-[5px]'>
            <Image src="/images/icons/leaf.svg" width={120} height={120}></Image>
          </div>
          <div className='relative top-[70px] left-[20px]'>
            <p className='font-bold text-[20px]' >Goal</p>
            <p className='text-[10px]'>Let&apos;s see what we have done</p>
          </div>
        </div>
        <div className='border-solid mx-5 border-[1px] rounded-lg border-white h-[200px] w-[200px]'>
          <div className='relative p-2 top-5 left-[20px]  w-1/4 border-solid border-[1px] rounded-[5px]'>
            <Image src="/images/icons/leaf.svg" width={120} height={120}></Image>
          </div>
          <div className='relative top-[70px] left-[20px]'>
            <p className='font-bold text-[20px]' >Mentors</p>
            <p className='text-[10px]'>Let&apos;s see what we have done</p>
          </div>
        </div>
        <div className='border-solid mx-5 border-[1px] rounded-lg border-white h-[200px] w-[200px]'>
          <div className='relative p-2 top-5 left-[20px]  w-1/4 border-solid border-[1px] rounded-[5px]'>
            <Image src="/images/icons/leaf.svg" width={120} height={120}></Image>
          </div>
          <div className='relative top-[70px] left-[20px]'>
            <p className='font-bold text-[20px]' >Works</p>
            <p className='text-[10px]'>Let&apos;s see what we have done</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Discover