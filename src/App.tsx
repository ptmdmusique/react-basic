import "./App.css";
import React, { useState } from 'react';
import { taskList } from "./taskList";

import icon from './icons8-delete.svg';


// Create a list with additional field to mark deleted task
interface typeExtended {
  id: number;
  name: string;
  isDeleted: boolean;
}

let taskListExt: typeExtended[] = [] ;

taskList.map( task => (
    taskListExt.push(
      {
        'id'       : task.id,
        'name'     : task.name,
        'isDeleted'  : false 
      }
    ))
)
//
function TaskShow() {
  const [tasks, setTasks ] = useState(taskListExt);
  const [newTaskName, setNewTaskName] = useState('');
  
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
    
    event.preventDefault();
    const newId  = tasks[ tasks.length-1 ].id + 1;
    
      setTasks( (previousTask) => [
                  ...previousTask,
                  { id: newId,
                    name: newTaskName,
                    isDeleted: false,
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

            <div>
              <button 
                className="delete-button"
                type='button'
                onClick={ () => {
                  task.isDeleted = true
                  setTasks(tasks.filter( item => ! item.isDeleted))
                }}  
              >
                <img className='delete-button-icon' src={icon} width='30px' height='30px' />
              </button>
            </div>  
        </div>
      ))}

      <div className="new-task-container"> 
        <form onSubmit={handleSubmit} >
          <div>
            <label for='taskname'>Task name</label><br />
               <input 
                  name='taskname'
                  className='new-task-name'
                  type='text'
                  placeholder="New task name here"
                  onChange={ event => setNewTaskName(event.target.value)}
                  value={newTaskName}
                />
                <button type='submit' className="new-task-button">
                    <font color='white'>Add new</font>
                </button>
          </div>
        </form>
      </div>  
    </div>
  )
}

function App() {
  return <TaskShow />;
}

export default App;
