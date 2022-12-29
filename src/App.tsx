import "./App.css";

import { taskList } from "./taskList";

function TaskShow() {
  return (
    <div>
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
