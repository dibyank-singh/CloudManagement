import React from 'react'

const About = () => {
  return (
    <div className='w-full my-24 '>
         <div className='max-w-[1240px] m-auto'>
               <div className='text-center '>
                   <p className='text-4xl font-bold'> Trusted by developers across the world</p>
                   <p className='text-2xl text-gray-500 py-5 px-3 md:px-16'>As a cloud service provider, this cloud management app has revolutionized our business operations. It offers a comprehensive suite of tools and features that empower us to efficiently manage and monitor our clients' cloud infrastructure.</p>  
               </div>
               <div className='grid md:grid-cols-3 px-2 gap-2 text-center mt-6'>
                   <div className='border py-4 rounded-lg shadow-lg'>
                    <p className='text-4xl text-indigo-700 font-bold'>100%</p>
                    <p className='text-2xl text-gray-400 my-3'>Completion</p>
                   </div>
                   <div className='border py-4 rounded-lg shadow-lg'>
                    <p className='text-4xl text-indigo-700 font-bold'>24/7</p>
                    <p className='text-2xl text-gray-400 my-3'>Delivery</p>
                   </div> 
                   <div className='border py-4 rounded-lg shadow-lg'>
                    <p className='text-4xl text-indigo-700 font-bold'>100k</p>
                    <p className='text-2xl text-gray-400 my-3'>Transactions</p>
                   </div>
               </div>
         </div>
    </div>
  )
}
export default About;