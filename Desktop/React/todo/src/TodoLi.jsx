import { useEffect } from "react";

export function TodoLi({
    completed,
    id,
    title,
    toggleTodo,
    deleteTodo,
    isEditing,
    editingValue,
    startEdit,
    cancelEdit,
    saveEdit,
    handleEditInput
}) {
    useEffect(() => {
        if (isEditing && (editingValue === undefined)) {
            handleEditInput(id, title);
        }
    }, [isEditing, editingValue, id, title, handleEditInput]);
    if (isEditing) {
        console.log('Rendering edit input for', id, 'with value', editingValue, 'and title', title);
    }
    return (
        <li>
            <label htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                    disabled={isEditing}
                />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editingValue !== undefined ? editingValue : ""}
                            onChange={e => handleEditInput(id, e.target.value)}
                            className="edit-input"
                            autoFocus
                        />
                        <button className="btn btn-success" onClick={() => saveEdit(id)} style={{marginLeft: 4}}>Save</button>
                        <button className="btn btn-secondary" onClick={cancelEdit} style={{marginLeft: 4}}>Cancel</button>
                    </>
                ) : (
                    <>
                        {title}
                        <button
                            className="btn btn-edit"
                            onClick={() => startEdit(id, title)}
                            style={{marginLeft: 8}}
                        >
                            Edit
                        </button>
                    </>
                )}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger" style={{marginLeft: 8}}>Delete</button>
        </li>
    );
}