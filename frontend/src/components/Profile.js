import React from 'react'

function Profile() {
  return (
    <div style={{
        background:'linear-gradient(180deg, #022F43 24.27%, #46737F 179.61%)'
    }} className='flex gap-12 flex-col items-center md:flex-row w-full text-white rounded-lg p-6'>
        <div className='h-32  w-32 rounded-full bg-gray-400'>

        </div>
        <div>
            <div>
            <h1 className='text-lg lg:text-2xl text-[#FFCD4A] font-bold'>Name</h1>
            <p className='text-sm lg:text-md font-semibold'>
                about the profession
            </p>
            </div>
            <div  className='flex mt-6 gap-6 justify-between'>
                <div>
                    <h3 className='text-[#C2C2C2] text-base '>Mail</h3>
                    <p>abc@gmail.com</p>
                </div>
                <div>
                    <h3 className='text-[#C2C2C2] text-base '>Ph No</h3>
                    <p>1234567</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Profile