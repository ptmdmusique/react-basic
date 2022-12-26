import "./App.css";

import { taskList } from "./taskList";

function TaskShow() {
  return (
    <div>
      {taskList.map((task) => (
        <div className="row">
          <div className="col1">
            <div className="box1">{task.id}</div>
          </div>
          <div className="col2">
            <div className="box2">{task.name}</div>
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
