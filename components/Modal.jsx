import React from 'react'

const Modal = ({isVisible, onClose}) => {
if(!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>X</button>
            <div className='bg-white p-2 rounded text-black'>details about project here</div>
        </div>
    </div>
  )
}

export default Modal