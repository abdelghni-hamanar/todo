import React, { useState } from 'react'
import {FcTodoList} from 'react-icons/fc'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full mx-auto bg-white h-[4rem] px-2 my-[-0.25rem] flex justify-between items-center shadow hover:shadow-lg'>
       <div className='flex'>
            <span> <FcTodoList size={30} /></span>
            <h1 className='text-[#293856] text-2xl font-bold ml-2'>MyTodo</h1>
       </div> 
       <ul className='hidden lg:flex'>
        <li className='px-4 font-bold text-center hover:text-blue-400'>Home</li>
        <li className='px-4 font-bold text-center hover:text-blue-400'>About</li>
        <li className='px-4 font-bold text-center hover:text-blue-400'>Pricing</li>
        <li className='px-4 font-bold text-center hover:text-blue-400'>Contact</li>
       </ul>
        <div className='hidden lg:flex'>
        <button className='px-4 text-xl text-[#293856]'>Log in</button>
        <button className='px-4 text-xl p-4 text-white bg-[#0065FF] hover:bg-[#0747A6] h-full'>Get MyTodo for free</button>
        </div>
        <div onClick={handleNav} className='lg:hidden'>
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={!nav ? 'fixed top-0 left-0 p-4 h-full border-r border-r-gray-100 bg-white w-[90%] shadow hover:shadow-md ease-in-out duration-200 lg:hidden' : 'fixed left-[-100%]'}>
                <div className='flex'>
                        <span> <FcTodoList size={30} /></span>
                        <h1 className='text-[#293856] text-2xl font-bold ml-2'>MyTodo</h1>
                </div> 
                <ul className='uppercase p-4'>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'>Home</li>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'>About</li>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'>Pricing</li>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'>Contact</li>
                </ul>
                <button className='p-4 w-full text-xl text-white bg-[#0065FF] hover:bg-[#0747A6] my-2 '>Get MyTodo for free</button>
                <button className='p-4 w-full text-2xl hover:text-[#0747A6] border border-blue-500'>Log in</button>
        </div>
        



    </div>
  )
}

export default Navbar