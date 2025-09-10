import { useState } from "react";
import { TodoForm } from "./TodoForm";
import "./styles.css";

export default function App() {
  // const [newItem, setNewItems] = useState("");
  const [todos, setTodos] = useState([]);
  
 function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo;
    })
  })
 }

 function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
 }

// function setChecked(checked) {
//   console.log(checked);
// }
  
  return (
    <>
    <h2 className="header">This is our to do list app</h2>
    <TodoForm setTodos={setTodos} />
    <h1 className="header">Todo List</h1>

    {/* List Items will go here.. */}
    <ul className="list">
      {todos.length === 0 && "You currently have no Todos, please add a todo!"}
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label htmlFor={todo.id}>
              <input type="checkbox" id={todo.id} checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        )
      })}
    </ul>
    </>
  );
}