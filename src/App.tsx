import React from "react";
import "./App.css";

import { taskList } from "./taskList";

function TaskShow() {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <span> {task.name} </span>
        </div>
      ))}
    </div>
  );
}

function App() {
  return <TaskShow />;
}

export default App;
