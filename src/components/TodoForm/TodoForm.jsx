import React from 'react';


import {useDispatch} from 'react-redux';
import {useHistory } from 'react-router-dom';

import useInputState from '../../hooks/useInputState';
import {useSelector} from '../../hooks/useSelector';
import {addTodo} from '../../actions';

import "./TodoForm.scss";



export default function TodoForm() {

    const dispatch = useDispatch();

    const history = useHistory();

    const state = useSelector();

    const isDark = state.darkTheme;

    const [title, changeTitle, resetTitle] = useInputState("");
    const [desc, changeDesc, resetDesc] = useInputState("");
    const [due, changeDue, resetDue] = useInputState("");
    const [status, changeStatus, resetStatus] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodo(title, desc, due, status));

        resetTitle();
        resetDesc();
        resetDue();
        resetStatus();

        history.push("/");
    }

    const inputClass = isDark ? "form__input dark" : "form__input";
    const labelClass = isDark ? "form__label dark" : "form__label";

    return (
        <div className={isDark ? "container dark" : "container light"}>
            <form className="form"  onSubmit={handleSubmit}>
                <div  className="form__group">
                    <input
                        className={inputClass} 
                        value={title} 
                        onChange={changeTitle} 
                        required placeholder="Title" 
                        type="text"
                        id="title"
                        autoComplete="off"
                    />
                    <label htmlFor="title" className={labelClass}>Task</label>
                </div>

                <div className="form__group">
                    <input
                        className={inputClass} 
                        value={desc} 
                        onChange={changeDesc} 
                        required placeholder="Description" 
                        type="text"
                        id="desc"
                        autoComplete="off"
                    />
                    <label htmlFor="desc" className={labelClass}>Description</label>
                </div>

                <div className="form__group">
                    <input 
                        value={due}
                        className={inputClass} 
                        onChange={changeDue} 
                        placeholder="Due Date" 
                        type="text"
                        onFocus={(e) => e.target.type='date'}
                        id="date"
                        autoComplete="off"
                    />
                    <label htmlFor="date" className={labelClass}>Due Date</label>
                </div>

                <div className="form__group">
                    <select onChange={changeStatus} id="status" className={inputClass}>
                        <option value="todo">Todo</option>
                        <option value="on">Ongoing</option>
                        <option value="stalled">Stalled</option>
                        <option value="done">Done</option>
                    </select>
                    <label htmlFor="status" className={labelClass}>Status</label>
                </div>
                
                <button className="button" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
