import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {Dropdown} from 'office-ui-fabric-react';
import {useHistory } from 'react-router-dom';

import {deleteTodo} from "../../actions";
import {editTodo} from "../../actions";

import {useSelector} from '../../hooks/useSelector';

import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import './Todo.scss';



export default function Todo(props) {
    const history = useHistory();

    const dispatch = useDispatch();

    const state = useSelector();

    const isDark = state.darkTheme;

    const todo = props.todo;
    const [status, setStatus] = useState(todo.id);

    const options = [
        {key: "todo", text: "ToDo"},
        {key: "on", text: "Ongoing"},
        {key: "stalled", text: "Stalled"},
        {key: "done", text: "Done"},
    ];

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    
    const handleEdit = (id) => {
        history.push(`/todo/edit/${id}`);
    }

    const handleDropDown = (e, selectedOption) => {
        dispatch(editTodo(todo.id, todo.title, todo.desc, todo.due, selectedOption.key));
        setStatus(selectedOption.key);
    }

    return (
        <div className={status === "done" ? "todo done" : "todo" }>
            <div className={isDark ? "todo__card dark" : "todo__card"}>
                <div className="todo__head">
                    <div>
                        <h3 className="todo__title"><i>{todo.title}</i></h3>
                    </div>
                    <div className="todo__head-attr">
                        <div onClick={() => handleEdit(todo.id)}><MdCreate/></div>
                        <div onClick={() => handleDelete(todo.id)}><MdDelete/></div>
                    </div>
                </div>
                
                <div className="todo__desc">{todo.desc}</div>
                <div className="todo__info">
                    <p className="todo__due">Due by {todo.due}</p>
                    <div className="todo__status">
                        <Dropdown
                            placeholder="change"
                            options={options}
                            selectedKey={todo.status}
                            onChange = {handleDropDown}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
