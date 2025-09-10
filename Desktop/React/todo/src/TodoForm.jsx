
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function TodoForm({ value, setValue, onSubmit, isEditing, cancelEdit }) {
  const [selectedDate, setSelectedDate] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e, selectedDate);
    setSelectedDate(null);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">{isEditing ? "Edit Item" : "New Item"}</label>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          id="item"
          placeholder="Type in your todo..."
        />
      </div>
      <div className="form-row">
        <label htmlFor="date">Due Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          placeholderText="Select a date"
          id="date"
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <button className="btn" type="submit">{isEditing ? "Save" : "Add"}</button>
      {isEditing && (
        <button className="btn btn-secondary" type="button" onClick={cancelEdit} style={{marginLeft: 4}}>Cancel</button>
      )}
    </form>
  );
}