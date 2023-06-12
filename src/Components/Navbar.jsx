import React, { useState } from 'react'
import { BiMenu, BiWindowClose } from "react-icons/bi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className='w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg z-10'>
                <div className='w-full h-full px-6 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h3 className='text-2xl font-bold sm:text-3xl '>DK-Services.</h3>
                        <ul className='hidden md:flex'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Support</li>
                            <li>Platforms</li>
                            <li>Pricing</li>
                        </ul>
                    </div> 
                    <div className='hidden md:flex pr-4'>
                        <button className='border-none bg-transparent text-black mr-3'>SingIn</button>
                        <button className='px-5 py-2'>SignUp</button>
                    </div>
                    <div className='md:hidden' onClick={handleClick}>
                        {
                            !nav ? <BiMenu className='w-[45px] h-[45px]' /> : <BiWindowClose className='w-[45px] h-[45px]' />
                        }
                    </div>
                </div>
                <div className={!nav ? "hidden" : 'bg-zinc-200 px-8 w-full text-center'}>
                    <ul>
                        <li className='border-b-2 bg-zinc-300 w-full'>Home</li>
                        <li className='border-b-2 bg-zinc-300 w-full'>About</li>
                        <li className='border-b-2 bg-zinc-300 w-full'>Support</li>
                        <li className='border-b-2 bg-zinc-300 w-full'>Platforms</li>
                        <li className='border-b-2 bg-zinc-300 w-full'>Pricing</li>
                        <div className='flex flex-col my-3'>
                            <button className='bg-transparent text-indigo-600 rounded-md px-5 py-2 '>SingIn</button>
                            <button className='px-5 py-2 my-3'>SingUp</button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar