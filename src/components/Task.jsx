import React,{useState , useEffect} from 'react'
import {doc,updateDoc, onSnapshot} from 'firebase/firestore'
import { UserAuth } from './context/AuthContext'
import {db} from '../firebase'

const Task = () => {
    const {user} = UserAuth()
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`), (doc)=>{
          setTasks(doc.data()?.savedTasks)
         })
      },[user?.email])

      const testRef = doc(db,'users',`${user?.email}`)

      const deleteTask = async (PassedID) => {
            try{
                const result = tasks.filter((item) => item.id !== PassedID);
                await updateDoc(testRef,{
                    savedTasks : result,
                })
            }catch(e){
                console.log(e.message())
            }
      }
      
  return (
    <div>
        <div class="mt-8">
                    <ul>   
                            {tasks.map((item) => (
                                <li class="p-2 rounded-lg" >
                                <div class="flex align-middle flex-row justify-between">
                                    <div className='p-2'></div>
                                    <div className="p-2">
                                        <p class="text-lg text-black">{item.Ttitle}</p>
                                    </div>
                                    <button 
                                        onClick={() => deleteTask(item.id)}
                                        class="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                                        <svg class="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                                <hr class="mt-2"/>
                            </li>
                            ))}
                            
                    </ul>
                </div>
    </div>
  )
}

export default Task