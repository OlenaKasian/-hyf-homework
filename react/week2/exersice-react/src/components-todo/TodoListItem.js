import React from 'react';

function TodoListItem(props) {

        return (
            <li>
                <p >{props.id}. {props.description}, {props.date}</p>
                <button className='delete-button'>Delete</button>
            </li>
        );
    }

    export default TodoListItem