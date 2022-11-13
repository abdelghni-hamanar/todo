import React, { useState } from 'react'
import {FcTodoList} from 'react-icons/fc'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../components/context/AuthContext';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const handleNav = () => {
        setNav(!nav)
    }

    const handleLogOut = async () => {
      try{
        await logOut()
          navigate('/')
      }catch(error){
        console.log(error)
      }
    }

  return (
    <div className='fixed w-full mx-auto bg-white h-[4rem] px-2 my-[-0.25rem] flex justify-between items-center shadow hover:shadow-lg'>
       <div className='flex'>
            <span> <FcTodoList size={30} /></span>
            <h1 className='text-[#293856] text-2xl font-bold ml-2 cursor-pointer'><Link to='/' smooth={true} duration={500}>MyTodo</Link></h1>
       </div> 
       <ul className='hidden lg:flex'>
        <li className='px-4 font-bold text-center hover:text-blue-400 cursor-pointer'><a href='./#home' smooth={true} duration={500}>Home</a></li>
        <li className='px-4 font-bold text-center hover:text-blue-400 cursor-pointer'><a href='./#about' smooth={true} duration={500}>About</a></li>
        <li className='px-4 font-bold text-center hover:text-blue-400 cursor-pointer'><a href='./#pricing' smooth={true} duration={500}>Pricing</a></li>
        <li className='px-4 font-bold text-center hover:text-blue-400 cursor-pointer'><a href='./#contact' smooth={true} duration={500}>Contact</a></li>
       </ul>
        <div className='hidden lg:flex'>
          <button className='px-4 text-xl text-[#293856]'><Link to={user?.email ? "/account" : "/login" }>{user?.email ? 'Account' : 'Log in'}</Link></button>
          {user?.email ? <button onClick={handleLogOut} className='px-4 text-xl p-4 text-white bg-[#0065FF] hover:bg-[#0747A6] h-full'>Log Out</button> : <button className='px-4 text-xl p-4 text-white bg-[#0065FF] hover:bg-[#0747A6] h-full'><Link to="/signup">Get MyTodo for free</Link></button>}
        </div>
        <div onClick={handleNav} className='lg:hidden'>
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={!nav ? 'fixed top-0 left-0 p-4 h-full border-r border-r-gray-100 bg-white w-[90%] shadow hover:shadow-md ease-in-out duration-200 lg:hidden' : 'fixed left-[-100%]'}>
                <div className='flex'>
                        <span> <FcTodoList size={30} /></span>
                        <h1 className='text-[#293856] text-2xl font-bold ml-2'><Link onClick={handleNav} to='/' smooth={true} duration={500}>MyTodo</Link></h1>
                </div> 
                <ul className='uppercase p-4'>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'><a onClick={handleNav} href='./' smooth={true} duration={500}>Home</a></li>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'><a  onClick={handleNav} href='./#about' smooth={true} duration={500}>About</a></li>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'><a onClick={handleNav} href='./#pricing' smooth={true} duration={500}>Pricing</a></li>
                        <li className='p-4 font-semibold text-center border-b border-b-gray-300 hover:text-blue-400'><a onClick={handleNav} href='./#contact' smooth={true} duration={500}>Contact</a></li>
                </ul>
                {user ? <button onClick={handleLogOut} className='p-4 w-full text-xl text-white bg-[#0065FF] hover:bg-[#0747A6] my-2 '>Log Out</button> : <button onClick={handleNav} className='p-4 w-full text-xl text-white bg-[#0065FF] hover:bg-[#0747A6] my-2 '><Link to='/signup'>Get MyTodo for free</Link></button>}
                {user ? <button className='p-4 w-full text-2xl hover:text-[#0747A6] border border-blue-500'><Link to="/account">Account</Link></button> : <button onClick={handleNav} className='p-4 w-full text-2xl hover:text-[#0747A6] border border-blue-500'><Link to="/login">Log in</Link></button>}
        </div>
    </div>
  )
}

export default Navbar