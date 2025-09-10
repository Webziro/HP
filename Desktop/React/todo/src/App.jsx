
import { useState } from "react";
import "./styles.css";


export default function App() {
  const [newItem, setNewItems] = useState("");
  const [todos, setTodos] = useState([]);


  //The function to submit the form handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return; // Prevent adding empty items
    console.log(newItem);

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ];
    });

    // Clear the input field after submitting
    setNewItems("");
  }

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

// function setChecked(checked) {
//   console.log(checked);
// }
  
  return (
    <>
    <h2 className="header">This is our to do list app</h2>
      <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={(e) => setNewItems(e.target.value)} type="text" id="item" />
          </div>

          <button className="btn" type="submit">Add</button>
      </form>
      <h1 className="header">Todo List</h1>

      {/* List Items will go here.. */}
      <ul className="list">
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label htmlFor={todo.id}>
          <input type="checkbox" id={todo.id} checked={todo.completed} 
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}/> 
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}