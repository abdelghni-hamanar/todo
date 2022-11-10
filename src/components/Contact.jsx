import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-t from-gray-200 to-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/085f0fa8-a27c-46bf-a18a-ad4081f2018c" className='flex flex-col max-w-[600px] w-full pt-44'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-[#091E42]'>Contact</p>
            </div>
            <input className=' p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 ' type="email" placeholder='Email' name='email' />
            <textarea className=' p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-blue-500 hover:bg-blue-700  px-4 py-3 my-8 mx-auto flex items-center rounded'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact