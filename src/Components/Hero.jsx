import React from 'react'
import Heroimge from "../assets/cyber-bg.png"
import { AiOutlineCloudServer } from "react-icons/ai";
const Hero = () => {
    return (
        <div className='h-screen w-full bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className=' flex flex-col justify-center md:items-start w-full px-4 py-6 '>
                    <p className='text-3xl font-bold md:text-4xl'>Welcome to our CloudManagement Service.</p>
                    <p className='text-2xl  py-3'>Management & Deployment Ready.</p>
                    <p className='text-2xl '>This is our cloud Tech Brand.</p>
                    <button className='px-4 py-3 mt-3 w-[35%] sm: w-[55%]'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={Heroimge} alt="CloudManagement Images" />
                </div>
                <div className='absolute flex flex-col py-5 md:min-w-[760px] bottom-[3%]
                       mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-300
                       border border-slate-300 rounded-xl text-center shadow-xl '> 
                    <p className='text-1xl '>Data Service</p>
                    <div className='flex justify-between px-3 flex-wrap cursor-pointer'> 
                        <p className='flex items-center px-4 py-2 text-slate-500 '><AiOutlineCloudServer className=' mr-1 text-indigo-600' /> App Deployment</p>
                        <p className='flex items-center px-4 py-2 text-slate-500'><AiOutlineCloudServer className=' mr-1 text-indigo-600' />  Cloud Data</p>
                        <p className='flex items-center px-4 py-2 text-slate-500'><AiOutlineCloudServer className=' mr-1 text-indigo-600' />  Data Security</p>
                        <p className='flex items-center px-4 py-2 text-slate-500'><AiOutlineCloudServer className=' mr-1 text-indigo-600' />  Test-Deployment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero