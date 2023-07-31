import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='w-full grid md:grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='w-full h-[600px] border shadow-xl flex flex-col justify-evenly items-center  hover:scale-105 duration-300'>
                <img src={single} alt='single' className='w-[100px] h-[100px] my-3'/>
                <h2 className='text-3xl font-bold'>Single User</h2>
                <h1 className='text-5xl font-bold'>$149</h1>
                <div className='font-bold text-xl'>
                    <p className='border-b border-b-gray-300 py-2'>500 GB Storage</p>
                    <p className='border-b border-b-gray-300 py-2'>1 User Allowed</p>
                    <p className='border-b border-b-gray-300 py-2'>Sendu up to 2 GB</p>
                </div>
                <button className='w-[200px] bg-green-400 text-2xl font-bold h-10 rounded-lg'>Start Trial</button>
            </div>
            <div className='w-full h-[600px] my-5 border shadow-xl flex flex-col justify-evenly items-center bg-slate-200  hover:scale-105 duration-300'>
                <img src={double} alt='single' className='w-[150px] h-[150px] my-3'/>
                <h2 className='text-3xl font-bold'>Shared Account</h2>
                <h1 className='text-5xl font-bold'>$199</h1>
                <div className='font-bold text-xl'>
                    <p className='border-b border-b-gray-300 py-2'>1 TB Storage</p>
                    <p className='border-b border-b-gray-300 py-2'>3 User Allowed</p>
                    <p className='border-b border-b-gray-300 py-2'>Sendu up to 5 GB</p>
                </div>
                <button className='w-[200px] bg-green-400 text-2xl font-bold h-10 rounded-lg'>Start Trial</button>
            </div>
            <div className='w-full h-[600px] border shadow-xl flex flex-col justify-evenly items-center  hover:scale-105 duration-300'>
                <img src={triple} alt='single' className='w-[100px] h-[100px] my-3'/>
                <h2 className='text-3xl font-bold'>Group Account</h2>
                <h1 className='text-5xl font-bold'>$299</h1>
                <div className='font-bold text-xl'>
                    <p className='border-b border-b-gray-300 py-2'>5 TB Storage</p>
                    <p className='border-b border-b-gray-300 py-2'>10 User Allowed</p>
                    <p className='border-b border-b-gray-300 py-2'>Sendu up to 10 GB</p>
                </div>
                <button className='w-[200px] bg-green-400 text-2xl font-bold h-10 rounded-lg'>Start Trial</button>
            </div>

        </div>
    </div>
  )
}

export default Cards