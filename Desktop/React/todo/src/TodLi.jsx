import { useEffect, useRef } from "react";

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
    setEditingValue
}) {
    const inputRef = useRef(null);

    // Autofocus and populate the input with the current title when entering edit mode
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            // If the editingValue is not the current title, update it
            if (editingValue !== title) {
                setEditingValue(title);
            }
        }
        // eslint-disable-next-line
    }, [isEditing, title]);

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
                            value={editingValue}
                            onChange={e => setEditingValue(e.target.value)}
                            className="edit-input"
                            ref={inputRef}
                        />
                        <button className="btn btn-success" onClick={() => saveEdit(id)} style={{marginLeft: 4}}>Save</button>
                        <button className="btn btn-secondary" onClick={cancelEdit} style={{marginLeft: 4}}>Cancel</button>
                    </>
                ) : (
                    <>
                        {title}
                        <button className="btn btn-edit" onClick={() => startEdit(id, title)} style={{marginLeft: 8}}>Edit</button>
                    </>
                )}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger" style={{marginLeft: 8}}>Delete</button>
        </li>
    );
}