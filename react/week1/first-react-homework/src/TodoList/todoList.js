import React from 'react'
import TodoItem from './todoItem'

function TodoList() {
    return <div>
        <ul>
            {TodoItem().map(todo => <TodoListItem id={todo.id} description={todo.description} date={todo.date} />)}
        </ul>
    </div>
}
function TodoListItem(props) {
    return <li>
        <p>{props.id}. {props.description}, {props.date}</p>
    </li>;
}

export default TodoList;