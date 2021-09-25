import React, { useState } from 'react'
import TodoItems from './TodoItems'
import TodoListItem from './TodoListItem'

function TodoList() {
    const originalTodos = TodoItems();
    let [updatedTodos, setTodos] = useState(originalTodos);

    let newTodoDescription = '';

    function addNewTodo() {
        const id = updatedTodos.length + 1;
        const date = new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const newTodo = { id: id, description: newTodoDescription, date: date }
        updatedTodos = updatedTodos.concat(newTodo);
        setTodos(updatedTodos)
    }

    return (<div>
        <input type='text' onChange={e => newTodoDescription = e.target.value} />
        <button className='add-button' onClick={() => addNewTodo()}>Add todo</button>
        <ul>
            {updatedTodos.map(todo => <TodoListItem key={todo.id} id={todo.id} description={todo.description} date={todo.date} />)}
        </ul>
    </div>);



}

export default TodoList;