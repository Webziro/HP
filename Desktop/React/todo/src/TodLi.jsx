export function TodoLi({ completed, id, title, toggleTodo, deleteTodo, startEdit, isEditing, date }) {
    // Format date if present
    let dateDisplay = "";
    if (date) {
        try {
            const d = new Date(date);
            dateDisplay = d.toISOString().slice(0, 10); // yyyy-MM-dd
        } catch {}
    }
    return (
        <li>
            <label htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
                {dateDisplay && (
                    <span style={{ marginLeft: 8, fontSize: '0.9em', color: '#aaa' }}>({dateDisplay})</span>
                )}
                <button
                    className="btn btn-edit"
                    onClick={() => startEdit(id, title)}
                    style={{ marginLeft: 8 }}
                    disabled={isEditing}
                    title="Edit"
                >
                    ✏️
                </button>
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger" style={{ marginLeft: 8 }} title="Delete">
                🗑️
            </button>
        </li>
    );
}