import React from 'react'

const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] w-full mt-[300px] h-screen text-center mx-auto flex flex-col '>
            <p className='md:text-4xl sm:text-2xl text-green-300 uppercase text-xl font-bold p-2'>Growing With Data Analytics</p>
            <h2 className='md:text-7xl sm:text-5xl text-6xl p-3 font-bold md:py-6'>Grow with data.</h2>
            <div>
                <p className='md:text-5xl sm:text-3xl text-xl p-3'>fast, flexible financing for</p>
                <p className='md:text-5xl sm:text-3xl text-xl p-3 text-gray-400'> BTB, BTC, SAAS</p>
                <button className='bg-green-300 text-black w-[200px] text-xl font-bold mt-10 rounded-lg h-10'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;