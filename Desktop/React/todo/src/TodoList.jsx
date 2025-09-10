import { TodoLi } from "./TodLi";

export function TodoList({ todos, toggleTodo, deleteTodo, startEdit, editingId }) {
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
                    startEdit={startEdit}
                    isEditing={editingId === todo.id}
                />
            ))}
        </ul>
    );
}