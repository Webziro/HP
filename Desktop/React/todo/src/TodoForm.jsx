export function TodoForm({ value, setValue, onSubmit, isEditing, cancelEdit }) {
  return (
    <form onSubmit={onSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">{isEditing ? "Edit Item" : "New Item"}</label>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn" type="submit">{isEditing ? "Save" : "Add"}</button>
      {isEditing && (
        <button className="btn btn-secondary" type="button" onClick={cancelEdit} style={{marginLeft: 4}}>Cancel</button>
      )}
    </form>
  );
}