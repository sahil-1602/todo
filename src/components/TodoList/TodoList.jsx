import React from 'react';

import { PrimaryButton } from 'office-ui-fabric-react';
import {useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Todo from '../Todo/Todo';
import './TodoList.scss';


export default function TodoList() {
    const history = useHistory();

    const todos = useSelector(state => state.todo);

    const isDark = useSelector(state => state.darkTheme);

    const handleClick = () => {
        history.push("/form");
    }

    return (
        <div className={isDark ? "list dark" : "list light"}>
            <div className="btn">
                <PrimaryButton onClick={handleClick} text="Add Todo" />
            </div>

            <div className={isDark ? "container dark" : "container light"}>
                {todos.map((todo) => <div className="todo" key={todo.id}><Todo todo={todo}/></div>)}
            </div>
        </div>
    )
}
