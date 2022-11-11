import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Login = () => {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')
      try{
          await logIn(email,password)
          navigate('/')
      }catch(error){
        console.log(error)
        setError(error.message)
      }
  }
  return (
    <>
      <div className='w-full h-screen bg-gradient-to-b from-gray-200 to-white'>
          <div className='w-full px-4 py-20 z-50'>
            <div className='max-w-[450px] h-[450px] mx-auto bg-black/75 text-white '>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold text-blue-400'>Log In</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                  <input onChange={(e) => setEmail(e.target.value)} className='px-3 py-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' autoComplete='email'/>
                  <input onChange={(e) => setPassword(e.target.value)} className='px-3 py-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' autoCorrect='current-password'/>
                  <button className='bg-[#0065FF] hover:bg-[#0747A6] py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex justify-between items-center text-sm text-blue-400'>
                    <p><input className='mr-2' type="checkbox"/>Remember me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'>
                    <span className='text-blue-400'>I you are New to MyTodo?</span>{' '}
                  <Link to='/login'>
                    Sign Up
                  </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>    
  )
}

export default Login