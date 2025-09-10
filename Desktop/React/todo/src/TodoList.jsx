import { TodoLi } from "./TodLi";

export function TodoList({
    todos,
    toggleTodo,
    deleteTodo,
    editingId,
    editingValue,
    startEdit,
    cancelEdit,
    saveEdit,
    setEditingValue
}) {
    return (
        <ul className="list">
            {todos.length === 0 && "You currently have no Todos, please add a todo!"}
            {todos.map(todo => (
                <TodoLi
                    id={todo.id}
                    completed={todo.completed}
                    title={todo.title}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    isEditing={editingId === todo.id}
                    editingValue={editingValue}
                    startEdit={startEdit}
                    cancelEdit={cancelEdit}
                    saveEdit={saveEdit}
                    setEditingValue={setEditingValue}
                />
            ))}
        </ul>
    );
}