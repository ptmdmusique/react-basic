import "./App.css";

import { taskList } from "./taskList";

function TaskShow() {
  return (
    <div className="App">
      <h2>My Fancy TODO App</h2>
      {taskList.map((task) => (
        <div className="container">
            <div className="id-container">
              <span className="text">{task.id}</span>
            </div>
            <div className="task-name-container">
              <span className="text">{task.name}</span>
            </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return <TaskShow />;
}

export default App;
