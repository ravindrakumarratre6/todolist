import { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTodo = () => {
    const newTaskInput = document.getElementById("new-task");
    const newTaskTitle = newTaskInput.value.trim();
    if (newTaskTitle === "") {
      return; // Prevent adding empty tasks
    }

    const newTaskObj = {
      completed: false,
      title: newTaskTitle,
      id: Date.now(),
    };

    // Update the state with the new array instead of directly modifying it
    setTasks((prevTasks) => [...prevTasks, newTaskObj]);

    newTaskInput.value = "";
  };

  return (
    <div className="App">
      <div className="todo-bar-container">
        <div className="todo-bar">
          <div style={{ borderRadius: "10px 0 0 10px" }} className="icon-container">
            <i className="fa-solid fa-list"></i>
          </div>
          <input id="new-task" type="text" placeholder="Enter the task" autoComplete="off" />
          <div
            style={{ borderRadius: "0 10px 10px 0" }}
            className="icon-container"
            id="add-btn"
            onClick={addTodo}
          >
            <i className="fa-danger fa-plus"></i>
          </div>
        </div>
      </div>
      <TodoContainer addedTask={tasks} />
    </div>
  );
}

export default App;
