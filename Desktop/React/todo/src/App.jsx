import { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  //Store in localStorage
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [editingId, setEditingId] = useState(null);
  const [inputValue, setInputValue] = useState("");

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
      setInputValue("");
    }
  }

  function startEdit(id, currentTitle) {
    setEditingId(id);
    setInputValue(currentTitle);
  }

  function cancelEdit() {
    setEditingId(null);
    setInputValue("");
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    if (editingId) {
      setTodos(currentTodos =>
        currentTodos.map(todo =>
          todo.id === editingId ? { ...todo, title: inputValue } : todo
        )
      );
      setEditingId(null);
    } else {
      setTodos(currentTodos => [
        ...currentTodos,
        { id: crypto.randomUUID(), title: inputValue, completed: false }
      ]);
    }
    setInputValue("");
  }

  return (
    <>
      <h2 className="header">This is our to do list app</h2>
      <TodoForm
        value={inputValue}
        setValue={setInputValue}
        onSubmit={handleFormSubmit}
        isEditing={!!editingId}
        cancelEdit={cancelEdit}
      />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        startEdit={startEdit}
        editingId={editingId}
      />
      <footer className="footer">
        <p>Todo List App developed by Stanley.Js <br /> Copyright &copy; 2024</p>
      </footer>
    </>
  );
}