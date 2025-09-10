import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

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
    // If deleting the one being edited, exit edit mode
    if (editingId === id) {
      setEditingId(null);
      setEditingValue("");
    }
  }

  function startEdit(id, currentTitle) {
    setEditingId(id);
    setEditingValue(currentTitle);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingValue("");
  }

  function saveEdit(id) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, title: editingValue } : todo
      )
    );
    setEditingId(null);
    setEditingValue("");
  }

  return (
    <>
      <h2 className="header">This is our to do list app</h2>
      <TodoForm setTodos={setTodos} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editingId={editingId}
        editingValue={editingValue}
        startEdit={startEdit}
        cancelEdit={cancelEdit}
        saveEdit={saveEdit}
        setEditingValue={setEditingValue}
      />
      <footer className="footer">
        <p>Todo List App developed by Stanley.Js <br /> Copyright &copy; 2024</p>
      </footer>
    </>
  );
}