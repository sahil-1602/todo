import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'


export default function TodoList() {
    const todos = useSelector(state => state.todo);
    return (
        <div>
            TodoList goes here:
            <div>
                {todos.map(todo => (<h2>{todo.title}</h2>))}
            </div>
            <div>
               <Link to="/form">Add todo</Link>
            </div>
        </div>
    )
}
