import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Bars } from "react-loader-spinner";

function TodoContainer({ addedTask }) {
  const [oldtodos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // Initially, set loading to true.
  console.log(addedTask);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setTodos(json);
          setLoading(false); // After data is fetched, set loading to false.
        }, 1000);
      });
  }, []);

  return (
    <div className="todo-container">
      {loading ? (
        <Bars height={80} width={80} color="blue" ariaLabel="bars-loading" visible={true} />
      ) : (
        <>
          {addedTask.map((task) => (
            <TodoItem tasks={task} key={task.id} />
          ))}
          {oldtodos.map((task) => (
            <TodoItem tasks={task} key={task.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default TodoContainer;
