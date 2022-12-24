import "./App.css";
import { todoList } from "./data";

function App() {
  return (
    <div className="app">
      <h1 className="title">
        <b>My Fancy TODO App</b>
      </h1>

      <div className="todo-container">
        {todoList.map((todo) => (
          <span className="task" key={todo.id}>
            <p className="id">{todo.id}</p>
            <p className="task-name">{todo.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
