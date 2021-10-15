import React from 'react';
import './App.css';
import TodoList from './components-todo/TodoList';
import Counter from './components-todo/Counter';


function App() {
  return (
    <div className="to-do-list">
      <div className="App-header">
        <h1> To do list</h1>
        <Counter />
      </div>
      <TodoList />

    </div>
  );
}

export default App;