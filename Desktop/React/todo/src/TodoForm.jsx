import { useState } from "react";

export function TodoForm({ setTodos }) {
const [newItem, setNewItems] = useState("");
//The function to submit the form handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return; // Prevent adding empty items
    //console.log(newItem);

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ];
    });

    // Clear the input field after submitting
    setNewItems("");
  }

  return (
      <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={(e) => setNewItems(e.target.value)} type="text" id="item" />
          </div>

          <button className="btn" type="submit">Add</button>
      </form>
  )
}