import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDo() {
  let [todos, setTodos] = useState([
    { task: "Sample", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };
  const updateTodoVal = (event) => {
    setNewTodo(event.target.value);
  };

  const deletetask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={newTodo}
        onChange={updateTodoVal}
        height={30}
      />
      <button onClick={addNewTask}>Add Task</button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <h4>Task list</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>{" "}
            &nbsp;
            <br />
            <button
              onClick={() => {
                deletetask(todo.id);
              }}
            >
              Delete Task
            </button>
            &nbsp;&nbsp;&nbsp;
            {!todo.isDone ? (
              <button
                onClick={() => {
                  markAsDone(todo.id);
                }}
              >
                Mark as done
              </button>
            ) : (
              <button
                onClick={() => {
                  markAsDone(todo.id);
                }}
              >
                Mark as Not Done
              </button>
            )}
          </li>
        ))}
      </ul>
      <hr />
      <button onClick={() => markAsDoneAll}>Mark all as done</button>
    </div>
  );
}
