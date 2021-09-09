import React from 'react';
import './App.css';
import TodoList from './TodoList/todoList'

function App() {
  return (
    <div className="to-do-list">
      <header className="App-header">
        <h1> To do list:</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
