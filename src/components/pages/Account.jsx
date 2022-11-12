import React, { useState } from 'react'
import {UserAuth} from '../context/AuthContext'
import Task from '../Task'
import {db} from '../../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import  {v4} from 'uuid'

const Account = () => {
  const {user, logOut} = UserAuth()
  const [task, setTask] = useState('')
  const [tstatus, setTaskStatus] = useState(1) 

  const TaskID = doc(db, 'users', `${user?.email}`);

  const addTask = async () => {
    await updateDoc(doc(db,'users',user?.email),{
      savedTasks : arrayUnion({
          id:v4(),
          Ttitle:task,
          tstate:tstatus
      })
    });
  }
  

  return (
    <>
        <div className='w-full h-screen bg-gradient-to-b from-blue-400 to-white'>
          <div className='max-w-[1240px] mx-auto h-full bg-white/70'>
            <div className='w-full py-8 max-h-[100px]'></div>
            <div className='max-w-[600px] mx-auto  py-4 max-h-[200px] bg-white'>
                <div class="text-center">
                    <h1 class="text-3xl font-bold">Hi {user?.email}</h1>
                    <div class="mt-4 flex ml-[5.5rem]">
                        <input
                            onChange={(e) => setTask(e.target.value)} value={task}
                            class="w-80 border-b-2 border-gray-500 text-black"
                            type="text" placeholder="Enter your task here" 
                        />
                        <button onClick={addTask}
                            class="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                        >   
                            <svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                            <span>Add</span>
                        </button>
                    </div>        
                </div>
            </div>
            <div className='bg-white max-w-[600px] mx-auto'>
                <Task />
            </div>
          </div>
        </div>
    </>
  )
}

export default Account