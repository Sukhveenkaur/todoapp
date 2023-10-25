
import React from 'react';
import '../App.css';
function TodoList({
  filteredTodos,
  toggleComplete,
  editTodo,
  deleteTodo,
  moveUp,
  moveDown,
  editingIndex,
  newTodo,
  setNewTodo,
}) {
  return (
    <div className="todo-list">
      { filteredTodos.length === 0 ? (
          <div className="no-items-found">No items found</div>
       ) : (
        filteredTodos.map((todo, index) => (
        <div key={index} className={`card ${todo.completed ? 'completed' : ''}`}>
         
          <h2 className="cardname">Task Description</h2>
          {editingIndex === index ? (
            
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          ) : (
            
            <span className="Name">{todo.text}</span>
          )}
          <div className="card-buttons">
            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            {index > 0 && <button onClick={() => moveUp(index)}>▲</button>}
            {index < filteredTodos.length - 1 && (
              <button onClick={() => moveDown(index)}>▼</button>
            )}
          </div>
        </div>
      )))}
    </div>
  );
}

export default TodoList;
