import React from 'react';
import useInputState from '../../hooks/useInputState';
import {useSelector,useDispatch} from 'react-redux';
import {editTodo} from '../../actions';
import {useHistory } from 'react-router-dom';
import "../TodoForm/TodoForm.scss";
import TodoList from '../TodoList/TodoList';



export default function EditTodoForm(props) {
    const history = useHistory();
    const todos = useSelector(state => state.todo);
    const isDark = useSelector(state => state.darkTheme);
    let id = window.location.pathname;
    id = id.substr(6, id.length);
    let todo = todos.find(todo => todo.id === id);
    const dispatch = useDispatch();

    const [title, changeTitle, resetTitle] = useInputState(todo.title);
    const [desc, changeDesc, resetDesc] = useInputState(todo.desc);
    const [due, changeDue, resetDue] = useInputState(todo.due);
    const [status, changeStatus, resetStatus] = useInputState(todo.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodo(id, title, desc, due, status));
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
            <form  className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <input
                        className={inputClass} 
                        value={title} 
                        onChange={changeTitle} 
                        required placeholder="Title" 
                        type="text"
                        id="title"
                        autocomplete="off"
                    />
                    <label for="title" class={labelClass}>Task</label>
                </div>
                <div className="form__group">
                    <input
                        className={inputClass} 
                        value={desc} 
                        onChange={changeDesc} 
                        required placeholder="Description" 
                        type="text"
                        id="desc"
                        autocomplete="off"
                    />
                    <label for="desc" class={labelClass}>Description</label>
                </div>
                <div className="form__group">
                    <input 
                        value={due}
                        className={inputClass} 
                        onChange={changeDue} 
                        placeholder="Due Date" 
                        type="date"
                        id="date"
                        autocomplete="off"
                    />
                    <label for="date" class={labelClass}>Due Date</label>
                </div>
                <div className="form__group">
                    <select value={status} onChange={changeStatus} id="status" className={inputClass}>
                        <option value="todo">Todo</option>
                        <option value="on">Ongoing</option>
                        <option value="stalled">Stalled</option>
                        <option value="done">Done</option>
                    </select>
                    <label for="status" class={labelClass}>Status</label>
                </div>
                <button className="button" type="submit">UPDATE</button>
            </form>
        </div>
    )
}
