import "./App.css";
import { todoList } from "./data";

function App() {
  return (
    <div>
      {todoList.map((todo) => (
        <p>{todo.name}</p>
      ))}
    </div>
  );
}

export default App;
