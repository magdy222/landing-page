import React from 'react'
import three from '../assets/three.jpg'

const Analytics = () => {
  return (
    <div className='w-full h-[1100px] bg-white py-16 px-4 '>
        <div className='max-w-[1550px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2'>
            <img className=' w-[600px] h-[600px] mx-auto my-4' alt='one' src={three}/>
            <div className='flex flex-col justify-start '>
                <p className='text-green-300 md:text-3xl sm:2xl text-xl font-bold py-4'>DATA ANALYTICS DASHBOARD</p>
                <h2 className='text-black md:text-5xl sm:text-3xl text-2xl font-bold py-4'>Manage Data Analytics Centerally</h2>
                <p className='text-black md:text-2xl sm:text-xl text-l font-bold py-4'>Data analytics involves using 
                statistical and computational methods
                to analyze and interpret data to extract
                insights and inform decision-making.
                </p>
                <button className='bg-black text-green-300 w-[200px]  h-10 rounded-lg text-lg font-bold'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;