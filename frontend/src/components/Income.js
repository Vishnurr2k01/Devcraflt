import React from 'react'

function Income() {
  return (
    <div>
        <div className='flex justify-center md:justify-end text-white text-3xl font-semibold'>
Total : $1234
        </div>
        <div className='flex flex-col items-center justify-center overflow-y-scroll'>

        <Card/>
        <Card/>
        {/* <Card/> */}

        </div>
    </div>
  )
}


export default Income

const Card = ()=>{
    return(
        <div style={{
            background:'linear-gradient(90.82deg, #E9C201 -1.37%, rgba(255, 255, 255, 0) 100%)'
        }} className='mt-6 flex flex-col md:flex-row w-full items-center justify-between px-6 py-2 rounded-xl ' >
            <div className='text-3xl font-bold'>
                Food
            </div>
            <div className='flex gap-12 mr-12 text-white'>
                <div>
                    <h2>ID</h2>
                    <h2>
                        Amount
                    </h2>
                </div>
                <div>
                    <h2>1234</h2>
                    <h2>$1000</h2>
                </div>
            </div>
        </div>
    )
}