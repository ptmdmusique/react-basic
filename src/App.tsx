import "./App.css";
import { todoList } from "./data";

function App() {
  return (
    <div>
      {todoList.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
