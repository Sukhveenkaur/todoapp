
import React from 'react';
import '../App.css';
function TodoForm({ newTodo, setNewTodo, addTodo, editingIndex, saveEdit }) {
  return (
    <div className="todo-form">
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div>
        {editingIndex === -1 ? (
          <button onClick={addTodo} className="Addbutton">
            Add Task
          </button>
        ) : (
          <button onClick={saveEdit} className="Addbutton">
            Save Task
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoForm;
