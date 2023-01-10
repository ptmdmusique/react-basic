import "./App.css";
import React, { useState } from "react";
import { taskList } from "./taskList";

import icon from "./icons8-delete.svg";


//
function TaskShow() {
// Create a list with additional field to mark deleted task
  const [tasks, setTasks] = useState(
    taskList.map((task) => ({
      id: task.id,
      name: task.name,
      isDeleted: false,
    }))
  );
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newId = tasks[tasks.length - 1].id + 1;

    setTasks((previousTask) => [
      ...previousTask,
      { id: newId, name: newTaskName, isDeleted: false },
    ]);
  };

  return (
    <div className="App">
      <h2>My Fancy TODO App</h2>
      {tasks.map((task) => (
        <div className="container" key={task.id}>
          <div className="id-container">
            <span className="text">{task.id}</span>
          </div>
          <div className="task-name-container">
            <span className="text">{task.name}</span>
          </div>

          <div>
            <button
              className="delete-button"
              type="button"
              onClick={() => {
                task.isDeleted = true;
                setTasks(tasks.filter((item) => !item.isDeleted));
              }}
            >
              <img className="delete-button-icon" src={icon} />
            </button>
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="new-task-container">
        <div className="my-input">
          <label htmlFor="taskname">Task name</label>
          <input
            name="taskname"
            className="new-task-name"
            type="text"
            placeholder="New task name here"
            onChange={(event) => setNewTaskName(event.target.value)}
            value={newTaskName}
          />
        </div>

        <button type="submit" className="new-task-button">
          Add new
        </button>
      </form>
    </div>
  );
}

function App() {
  return <TaskShow />;
}

export default App;
