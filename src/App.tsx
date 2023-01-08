import "./App.css";
import React, { useState } from 'react';
import { taskList } from "./taskList";

let taskListCopy = taskList;

// Create a list with additional field to mark deleted task
  let taskListExt: any[] = [];
  for (let i=0 ; i < taskListCopy.length; i++){
    taskListExt.push(
      {
        'id'  : taskListCopy[i].id,
        'name': taskListCopy[i].name,
        'del' : '' 
      }
    )
  }


//

function TaskShow() {
  let [tasks, setTasks ] = useState(taskListExt);
  let [newTask, setNewTask] = useState('');
  
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
    
    event.preventDefault();
    let newId  = tasks[ tasks.length-1 ].id + 1;
    
      setTasks( (previousTask) => [
                  ...previousTask,
                  { id: newId,
                    name: newTask
                  }
              ]
            )
  }

  return (

    <div className="App">

      <h2>My Fancy TODO App</h2>
      {tasks.map((task) => (
        <div className="container" key={task.id}>
            <div className="id-container" >
              <span className="text">{task.id}</span>
            </div>
            <div className="task-name-container">
              <span className="text">{task.name}</span>
            </div>

            <div className="delete-button">
              <button type='button'
                onClick={ () => {
                  task.del = '*'
                  setTasks(tasks.filter( item => item.del !== '*'))
                }}  
              >
               <font size="+2">🗑</font>



              </button>
            </div>  
        </div>
      ))}

       
        <form onSubmit={handleSubmit} >
          <div className="container" >
          
           <div className="newtask-name">
            <input 
              style={{width: "640px"}}
              type='text'
              placeholder="New task name here"
              onChange={ event => setNewTask(event.target.value)}
              value={newTask}
            />
          </div>
          <div>
            <button type='submit' className="newtask-button">
              Add new
            </button>
          </div>  
         </div>       
        </form>
       
    </div>
  )  

}

function App() {
  return <TaskShow />;
}

export default App;
