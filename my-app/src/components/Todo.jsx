function Todo({ text, onDelete }) {
  return (
    <li style={{ margin: "10px 0" }}>
      {text} 
      <button 
        onClick={onDelete} 
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
