import React from 'react';
import './Todo.scss';
import {Dropdown} from 'office-ui-fabric-react';
import { useSelector,useDispatch} from 'react-redux';
import {useHistory } from 'react-router-dom';

import {deleteTodo} from "../../actions"

import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";



export default function Todo(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.darkTheme);
    const todo = props.todo;
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
        history.push(`/edit/${id}`);
    }
    return (
        <div className="todo">
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
                
                <p className="todo__desc">{todo.desc}</p>
                <div className="todo__info">
                    <p className="todo__due">Due by {todo.due}</p>
                    <div className="todo__status">
                        <Dropdown
                            placeholder="change"
                            options={options}
                            selectedKey={todo.status}
                            onChange = {(e, selectedOption) => console.log(selectedOption)}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
