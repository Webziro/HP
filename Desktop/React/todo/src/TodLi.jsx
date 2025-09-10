// export function TodoLi({ completed, id, title, toggleTodo, deleteTodo, startEdit, isEditing }) {
//     return (
//         <li>
//             <label htmlFor={id}>
//                 <input
//                     type="checkbox"
//                     id={id}
//                     checked={completed}
//                     onChange={e => toggleTodo(id, e.target.checked)}
//                 />
//                 {title}
//                 <button
//                     className="btn btn-edit"
//                     onClick={() => startEdit(id, title)}
//                     style={{ marginLeft: 8 }}
//                     disabled={isEditing}
//                 >
//                     Edit
//                 </button>
//             </label>
//             <button onClick={() => deleteTodo(id)} className="btn btn-danger" style={{ marginLeft: 8 }}>
//                 Delete
//             </button>
//         </li>
//     );
// }