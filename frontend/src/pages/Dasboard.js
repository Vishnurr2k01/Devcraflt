import React, { useState } from 'react'
import Profile from '../components/Profile'
import Income from '../components/Income'
import ExpenseChart from '../components/ExpenseChart'
import {BiPlus} from 'react-icons/bi'
function Dasboard() {
  const [selec,setselec] = useState(false)
  const [open,setOpen] = useState(false)
 const Data = [
    {
      id:'Income',
     cost:50000,  
    },
    {
      id:'Expense',
      cost:24000,  
    },
    
]
  return (
    <>
    <div style={{
background:`url('/bg.png')`,
backgroundSize:'cover',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',

    }} className='text-xl h-fit pt-12 min-h-screen max-w-screen flex flex-col md:flex-row gap-6 justify-around px-6'>
      
      <div className='w-full md:w-2/3 lg:w-1/3'>
        <div className='mb-12'>
        <h3 className='text-white text-3xl font-light'>Welcome</h3>
        <h2 className='text-black text-5xl font-semibold'>Dasboard</h2>

        </div>
      <Profile/>
      <div style={{
        border:'1px solid rgba(255, 255, 255, 0.5)'

      }} className='bg-[#022F43] p-12 mt-12 rounded-xl h-[60vh]'>
        <div className='flex  text-center justify-center mb-12'>
          <div className={`${selec ? 'text-white bg-[#FFCD4A] border-[1px] p-4 border-[#FFCD4A]' : 'text-[#FFCD4A]  p-4 border-[1px] border-white'} px-8 rounded-l-xl text-2xl font-semibold`}>Income</div>
          <div className={`${!selec ? 'text-white bg-[#FFCD4A] border-[1px] p-4  border-[#FFCD4A]' : 'text-[#FFCD4A]  p-4 border-[1px] border-white'} px-8 rounded-r-xl text-2xl font-semibold`}>Expenses</div>
        </div>
      <Income/>
      </div>
      </div>
      <div className=' w-full md:mt-32 md:w-1/3 bg-[#022F43] flex flex-col items-center justify-center h-fit py-12 rounded-xl'>
      <h3 className='mb-12 text-3xl text-white font-semibold'>Monthly Expense Tracker</h3>
      <div className='w-80 h-80 rounded-full bg-gray-200  '>
      </div>
{/* <ExpenseChart chartData={Data}/> */}
      </div>

      <div className='absolute bottom-20 right-20'>
      <BiPlus onClick={()=>setOpen(!open)}  className='text-7xl bg-[#FFCD4A] rounded-full '/>
      </div>
      {open && <Open/>}
    </div>
    </>
  )
}
const Open=()=>{
  return(
<div className='absolute bottom-44 right-20 ' >
  <div className='bg-white px-4 py-2 rounded-md hover:bg-slate-200 cursor-pointer'>
    Add Expense
  </div>
  <div className='bg-white px-4 mt-4 py-2 rounded-md hover:bg-slate-200 cursor-pointer'>
    Add Income
  </div>

</div>

  )
}

export default Dasboard