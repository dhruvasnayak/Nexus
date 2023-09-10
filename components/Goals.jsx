import React from 'react'

const Goals = () => {
  return (
    <div className='mx-5 min[300px]:mx-[50px] sm:mx-[100px] md:[150px] my-8 '>
      <p className='p-[10px] mx-auto font-bold text-4xl font-montserrat '>Our <span className='  font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary '>Goals</span></p>

      <div className=' flex flex-col mx-auto '>
          <div className='max-w-[848px]  gap-[10px] p-[10px]'>
            <p className='font-semibold text-[26px] font-montserrat w-auto'>Foster Innovation</p>
            <p className='font-normal text-[14px] leading-[20px] font-montserrat text-text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat numquam alias animi ab minus facilis molestiae sapiente soluta quia. Maxime magnam illo nulla architecto quasi porro est repellat quibusdam!</p>
          </div>
          <div className='max-w-[848px]  gap-[10px] p-[10px]'>
            <p className='font-semibold text-[26px] font-montserrat w-auto '>Foster Innovation</p>
            <p className='font-normal text-[14px] leading-[20px] font-montserrat text-text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat numquam alias animi ab minus facilis molestiae sapiente soluta quia. Maxime magnam illo nulla architecto quasi porro est repellat quibusdam!</p>
          </div>
      </div>

    </div>
    
  )
}

export default Goals