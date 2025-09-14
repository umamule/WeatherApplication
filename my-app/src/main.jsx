import { useState } from "react";
import Todo from "./components/Todo.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [task, setTask] = useState("");        // Input value
  const [todos, setTodos] = useState([]);      // List of tasks

  // Add task
  const addTask = () => {
    if (task.trim() === "") return; // avoid empty
    setTodos([...todos, task]);     // push new task
    setTask("");                    // clear input
  };

  // Delete task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Todo App ✅</h1>

      {/* Input + Button */}
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>

      {/* Show Tasks */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((item, index) => (
          <Todo 
            key={index} 
            text={item} 
            onDelete={() => deleteTask(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
