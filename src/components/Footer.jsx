import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp, AiOutlineGithub} from 'react-icons/ai'


const FooterExample = () => {
  return (
    <div className='text-white w-full '>
    <div className='grid md:grid-cols-1 lg:grid-cols-3 lg:gap-32 p-5'>
        <div>
            <h2 className='text-green-400 text-xl font-bold py-3'>REACT.</h2>
            <p className=' text-l font-bold py-3'>Adaptable and adjustable to
            different situations, needs,
            or requirements with speed
            and efficiency.
            </p>
            <div className='flex justify-start gap-5 py-3'>
                <AiFillFacebook size={24}/>
                <AiFillInstagram size={24}/>
                <AiOutlineWhatsApp size={24}/>
                <AiOutlineGithub size={24}/>
            </div>
        </div> 
        <div  className='flex  justify-between lg:gap-32 gap-5 py-3'>
            <div>
                <p>Solutions</p>
                <p>Analytics</p>
                <p>Marketing</p>
                <p>E-Commerce</p>
                <p>Insights</p>
            </div> 
            <div>
                <p>Support</p>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>Status</p>
            </div>
            <div>
                <p>Company</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Careers</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FooterExample;