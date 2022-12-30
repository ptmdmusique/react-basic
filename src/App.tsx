import "./App.css";

import { taskList } from "./taskList";

function TaskShow() {
  return (
    <div>
      <div className="title">
        <h2>My Fancy TODO App</h2>
      </div>
      {taskList.map((task) => (
        <div className="container">
            <div className="id-container">{task.id}</div>
            <div className="task-name-container">{task.name}</div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return <TaskShow />;
}

export default App;
