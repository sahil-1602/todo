import React from 'react';

import useInputState from '../../hooks/useInputState';
import {useDispatch} from 'react-redux';
import {useHistory } from 'react-router-dom';

import {useSelector} from '../../hooks/useSelector';

import {editTodo} from '../../actions';
import "../TodoForm/TodoForm.scss";



export default function EditTodoForm(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector();

    const todos = state.todo;
    
    const isDark = state.darkTheme;
    
    let id = window.location.pathname;
    id = id.substr(11, id.length);
    let todo = todos.find(todo => todo.id === id);

    
    const [title, changeTitle, resetTitle] = useInputState(todo?.title || "");
    const [desc, changeDesc, resetDesc] = useInputState(todo?.desc || "");
    const [due, changeDue, resetDue] = useInputState(todo?.due || "");
    const [status, changeStatus, resetStatus] = useInputState(todo?.status || "");


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(editTodo(id, title, desc, due, status));

        resetTitle();
        resetDesc();
        resetDue();
        resetStatus();

        history.push("/todo/list");
    }
    const inputClass = isDark ? "form__input dark" : "form__input";
    const labelClass = isDark ? "form__label dark" : "form__label";

    if(todo){
        return (
            <div className={isDark ? "container dark" : "container light"}>
                <form  className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
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
                            type="date"
                            id="date"
                            autoComplete="off"
                        />
                        <label htmlFor="date" className={labelClass}>Due Date</label>
                    </div>

                    <div className="form__group">
                        <select value={status} onChange={changeStatus} id="status" className={inputClass}>
                            <option value="todo">Todo</option>
                            <option value="on">Ongoing</option>
                            <option value="stalled">Stalled</option>
                            <option value="done">Done</option>
                        </select>
                        <label htmlFor="status" className={labelClass}>Status</label>
                    </div>
                    
                    <button className="button" type="submit">UPDATE</button>
                </form>
            </div>
        )
    }else{
        return(
            <h2>We didn't find any todo :(</h2>
        )
    }
}
