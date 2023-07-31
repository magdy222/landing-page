import React from 'react'

const News = () => {
  return (
    <div className=' w-full h-[500px] mt-[100px] py-16 px-4 text-white'>
    <div className='max-w-[1550px] mx-auto grid lg:grid-cols-3 '>
        <div className='lg:col-span-2 my-4 '>
            <p className='md:text-4xl  p-4 text-2xl'>Wants Tips & Tricks to Optimize Your Flow ?</p>
            <p className='md:text-2xl sm:text-xl p-4 text-l'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
            <input className='md:px-18 px-14 py-3 text-center rounded-lg' type='text' placeholder='search....'/>
            <button className='bg-green-400 md:w-[200px] mx-1 sm:w-[150px] text-black font-bold h-12 rounded-lg mt-3'>Notify me</button>
            <p className='md:text-2xl  text-xl py-4'>we care about your data security .Read our</p>
            <span className='md:text-2xl text-xl text-green-400   underline decoration-solid'>Privacy Policy.</span>
        </div>
    </div>
    </div>
  )
}

export default News;