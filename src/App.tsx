import "./App.css";
import React, { useState, useEffect } from "react";
import icon from "./icons8-delete.svg";

interface Item {
  id: number;
  name: string;
}
interface ItemWithDeleteFlag {
  id: number;
  name: string;
  isDeleted: boolean;
}

function TaskShow() {
  const [newTaskName, setNewTaskName] = useState("");
  //    Fetch data
  const [tasks, setTasks] = useState<ItemWithDeleteFlag[]>([]);

  useEffect(() => {
    fetch("https://www.jsonkeeper.com/b/MF8H")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data: Item[]) => {
        setTasks(
          data.map((item) => ({
            id: item.id,
            name: item.name,
            isDeleted: false,
          }))
        );
      });

    return () => {
      setTasks([]);  // cleanup
    }
  }, []);

  // end fetch data

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
