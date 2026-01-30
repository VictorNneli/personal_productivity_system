import React from 'react'
import { useState } from 'react'
import './taskmanager.css'

const Taskmanager = () => {
 const [task, setTask] = useState(""); 
 const [tasks, setTasks] = useState([]); 
 function handleSubmit(e) {
      e.preventDefault();
      if(!task.trim()){
        return;
      }
      
      const newTask = {
        id: Date.now() + Math.floor(Math.random() * 100),
        Text: task,
      }
      setTasks([...tasks, newTask]);
      setTask("")
      console.log(tasks);
    }
    function deleteTask (id) {
      const newTasks = tasks.filter((item) => item.id !== id);
      setTasks(newTasks);
    }
  return (
   <div>
     <div className='task_container'>
        <form action="" id='task_form' onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter Your Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
           />
           <div className='task_btn'>
              <button>Create Task</button>
           </div>
        </form>
        <div className='taskContent'>
           {tasks.map((item) => (
            <div className='task-flex'>
               <p>{item.Text}</p>
               <button id='delete-btn' onClick={() => deleteTask(item.id)}>Delete Task</button>
            </div>
           ))}
        </div>
     </div>

   </div>
  )
}


export default Taskmanager