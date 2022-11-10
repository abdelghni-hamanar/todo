import React from 'react'

const Home = () => {
  return (
        <div name="home" className=' w-full h-screen bg-gradient-to-b from-gray-200 to-white flex flex-col md:flex-row'>
            <div className='block md:hidden'>
                <img className='max-w-[450px] mt-[8rem] mx-auto' src="https://images.ctfassets.net/rz1oowkt5gyp/4EdaVcwdrnycEg4bDi0HvB/d02337f14d7596e1d08ffb18b3aaa1e4/Hero-mobile_2x.png?w=540&fm=webp" alt="/" />
            </div>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col text-[#091E42] justify-center h-full items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center'>MyTodo brings all your tasks, teammates, and tools together</h1>
                <p className='text-xl text-center'>Keep everything in the same place—even if your team isn’t.</p>
                <button className='w-full sm:w-[60%] md:w-[80%] lg:w-[40%] text-white my-2 p-4 h-15  bg-[#0065FF] hover:bg-[#0747A6] rounded cursor-pointer'>Sign Up - it's free</button>
            </div>
            <div className='hidden md:block'>
                <img className='max-w-[450px] mt-[8rem]' src="https://images.ctfassets.net/rz1oowkt5gyp/4EdaVcwdrnycEg4bDi0HvB/d02337f14d7596e1d08ffb18b3aaa1e4/Hero-mobile_2x.png?w=540&fm=webp" alt="/" />
            </div>
        </div>
  )
}

export default Home