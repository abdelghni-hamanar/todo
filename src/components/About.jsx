import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name="about" id='about' className='w-full h-screen bg-white'>
        <div className='flex flex-col md:flex-row max-w-[1000px] mx-auto justify-center w-full h-full p-10 mt-[20rem] md:my-0'>
            <div className='max-w-[300px] flex flex-row my-4 mx-auto '>
                <img className='h-[20%] p-2 m-4'  src="https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg" alt="tag" />
                <div>
                    <h1 className='text-[#091E42] font-bold text-2xl'>See MyTodo pricing</h1>
                    <p className='text-black text-sm'>Whether you’re a team of 2 or 2,000, MyTodo can be customized for your organization. Explore which option is best for you.</p>
                    <button className='text-white my-2 p-4 h-15  bg-[#0065FF] hover:bg-[#0747A6] rounded cursor-pointer'><Link to='pricing' smooth={true} duration={500}>By Now</Link></button>
                </div>
            </div>
            <div className='max-w-[300px] flex flex-row my-4 mx-auto'>
                <img className='h-[20%] p-2 m-4'  src="https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg" alt="tag" />
                <div>
                    <h1 className='text-[#091E42] font-bold text-2xl'>What is MyTodo?</h1>
                    <p className='text-black text-sm'>MyTodo is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.</p>
                    <button className='text-white my-2 p-4 h-15  bg-[#0065FF] hover:bg-[#0747A6] rounded cursor-pointer'>Tour MyTodo</button>
                </div>
            </div>
            <div className='max-w-[300px] flex flex-row my-4 md:mr-4 mx-auto'>
                <img className='h-[20%] p-2 m-4'  src="https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg" alt="tag" />
                <div>
                    <h1 className='text-[#091E42] font-bold text-2xl'>Discover MyTodo Enterprise</h1>
                    <p className='text-black text-sm'>The productivity tool teams love, paired with the features and security needed for scale.</p>
                    <button className='text-white my-2 p-4 h-15  bg-[#0065FF] hover:bg-[#0747A6] rounded cursor-pointer'>Learn More</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About