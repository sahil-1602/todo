import React from 'react';
import useInputState from '../hooks/useInputState';
import {useDispatch} from 'react-redux';
import {addTodo} from '../actions';
import {useHistory } from 'react-router-dom';



export default function TodoForm() {

    const dispatch = useDispatch();

    const history = useHistory();

    const [title, changeTitle, resetTitle] = useInputState("");
    const [desc, changeDesc, resetDesc] = useInputState("");
    const [due, changeDue, resetDue] = useInputState("");
    const [status, changeStatus, resetStatus] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = addTodo(title, desc, due, status);
        dispatch(data);
        resetTitle();
        resetDesc();
        resetDue();
        resetStatus();
        history.push("/");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={changeTitle} required placeholder="Title" type="text"/>
                <input value={desc} onChange={changeDesc} required placeholder="Description" type="text"/>
                <input value={due} onChange={changeDue} placeholder="Due Date" type="text"/>
                <input value={status} onChange={changeStatus} placeholder="Status" type="text"/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
