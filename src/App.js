
// import React, { useState ,useEffect} from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredTodos, setFilteredTodos] = useState([]);
//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   useEffect(() => {
//     // Filter todos based on the search query
//     const filtered = todos.filter((todo) =>
//       todo.text.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredTodos(filtered);
//   }, [searchQuery, todos]);
//   const addTodo = () => {
//     if (newTodo) {
//       const updatedTodos = [...todos, { text: newTodo, completed: false }];
//       setTodos(updatedTodos);
//       setNewTodo('');
//     }
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   const editTodo = (index) => {
//     setEditingIndex(index);
//     setNewTodo(todos[index].text);
//   };

//   const saveEdit = () => {
//     if (newTodo) {
//       const updatedTodos = [...todos];
//       updatedTodos[editingIndex] = { text: newTodo, completed: updatedTodos[editingIndex].completed };
//       setTodos(updatedTodos);
//       setEditingIndex(-1);
//       setNewTodo('');
//     }
//   };

//   const toggleComplete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };
//   const moveUp = (index) => {
//     if (index > 0) {
//       const updatedTodos = [...todos];
//       const temp = updatedTodos[index];
//       updatedTodos[index] = updatedTodos[index - 1];
//       updatedTodos[index - 1] = temp;
//       setTodos(updatedTodos);
//     }
//   };

//   const moveDown = (index) => {
//     if (index < todos.length - 1) {
//       const updatedTodos = [...todos];
//       const temp = updatedTodos[index];
//       updatedTodos[index] = updatedTodos[index + 1];
//       updatedTodos[index + 1] = temp;
//       setTodos(updatedTodos);
//     }
//   };
//   return (
//     <div className="App">
//     <div className="topNav">
//       <h1 className="header">Task<span>Que</span></h1>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search tasks"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={() => setSearchQuery('') }className="clear">Clear</button>
//       </div>
//       </div>
//       <div className="todo-form">
//       <div>
//         <input
//           type="text"
//           placeholder="Add a new todo"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         </div>
//         <div>
//         {editingIndex === -1 ? (
//           <button onClick={addTodo} className ="Addbutton">Add Task</button>
//         ) : (
//           <button onClick={saveEdit} className ="Addbutton">Save Task</button>
//         )}
//         </div>
//       </div>
      
//       <div className="todo-list">
//         { filteredTodos.length === 0 ? (
//           <div className="no-items-found">No items found</div>
//         ) : (
//           filteredTodos.map((todo, index) => (
//           <div key={index} className={`card ${todo.completed ? 'completed' : ''}`}>
//           <h2 className='cardname'>Task Description</h2>
//             {editingIndex === index ? (
//               <input
//                 type="text"
//                 value={newTodo}
//                 onChange={(e) => setNewTodo(e.target.value)}
//               />
//             ) : (
              
//               <span className='Name'>{todo.text}</span>
//             )}
//             <div className="card-buttons">
//               <button onClick={() => toggleComplete(index)}>
//                 {todo.completed ? 'Uncomplete' : 'Complete'}
//               </button>
//               <button onClick={() => editTodo(index)}>Edit</button>
//               <button onClick={() => deleteTodo(index)}>Delete</button>
//               {index>0 && <button onClick={() => moveUp(index)}>▲</button>}
//               {index<todos.length-1 && <button onClick={() => moveDown(index)}>▼</button>}
//             </div>
//           </div>
//         )))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredTodos, setFilteredTodos] = useState([]);

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   useEffect(() => {
//     // Filter todos based on the search query
//     if (todos) {
//       const filtered = todos.filter((todo) =>
//         todo.text.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredTodos(filtered);
//     }
//   }, [searchQuery, todos]);

//   // Define the clearSearch function to clear the search query
//   const clearSearch = () => {
//     setSearchQuery('');
//   };

//   const addTodo = () => {
//     if (newTodo) {
//       const updatedTodos = [...todos, { text: newTodo, completed: false }];
//       setTodos(updatedTodos);
//       setNewTodo('');
//     }
//   };

//   const deleteTodo = (index) => {
//     if (todos) {
//       const updatedTodos = [...todos];
//       updatedTodos.splice(index, 1);
//       setTodos(updatedTodos);
//     }
//   };

//   const editTodo = (index) => {
//     setEditingIndex(index);
//     setNewTodo(todos[index].text);
//   };

//   const saveEdit = () => {
//     if (newTodo && todos) {
//       const updatedTodos = [...todos];
//       updatedTodos[editingIndex] = { text: newTodo, completed: updatedTodos[editingIndex].completed };
//       setTodos(updatedTodos);
//       setEditingIndex(-1);
//       setNewTodo('');
//     }
//   };

//   const toggleComplete = (index) => {
//     if (todos) {
//       const updatedTodos = [...todos];
//       updatedTodos[index].completed = !updatedTodos[index].completed;
//       setTodos(updatedTodos);
//     }
//   };

//   const moveUp = (index) => {
//     if (todos && index > 0) {
//       const updatedTodos = [...todos];
//       const temp = updatedTodos[index];
//       updatedTodos[index] = updatedTodos[index - 1];
//       updatedTodos[index - 1] = temp;
//       setTodos(updatedTodos);
//     }
//   };

//   const moveDown = (index) => {
//     if (todos && index < todos.length - 1) {
//       const updatedTodos = [...todos];
//       const temp = updatedTodos[index];
//       updatedTodos[index] = updatedTodos[index + 1];
//       updatedTodos[index + 1] = temp;
//       setTodos(updatedTodos);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="topNav">
//         <Header />
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} clearSearch={clearSearch} />
//       </div>
//       <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} editingIndex={editingIndex} saveEdit={saveEdit} />
//       <TodoList filteredTodos={filteredTodos} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo} moveUp={moveUp} moveDown={moveDown} editingIndex={editingIndex} newTodo={newTodo} setNewTodo={setNewTodo} />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    // Filter todos based on the search query
    const filtered = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchQuery, todos]);

  const addTodo = () => {
    if (newTodo) {
      const updatedTodos = [...todos, { text: newTodo, completed: false }];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };
   const clearSearch = () => {
    setSearchQuery('');
  };
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setNewTodo(todos[index].text);
  };

  const saveEdit = () => {
    if (newTodo) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = {
        text: newTodo,
        completed: updatedTodos[editingIndex].completed,
      };
      setTodos(updatedTodos);
      setEditingIndex(-1);
      setNewTodo('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTodos = [...todos];
      const temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index - 1];
      updatedTodos[index - 1] = temp;
      setTodos(updatedTodos);
    }
  };

  const moveDown = (index) => {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      const temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index + 1];
      updatedTodos[index + 1] = temp;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="App">
       <div className="topNav">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} clearSearch={clearSearch} /></div>
    
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        editingIndex={editingIndex}
        saveEdit={saveEdit}
      />
      <TodoList
        filteredTodos={filteredTodos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        moveUp={moveUp}
        moveDown={moveDown}
        editingIndex={editingIndex}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
    </div>
  );
}

export default App;
