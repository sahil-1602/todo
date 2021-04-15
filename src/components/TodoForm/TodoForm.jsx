import React, {useState} from 'react';


import {useDispatch} from 'react-redux';
import {useHistory } from 'react-router-dom';

import useInputState from '../../hooks/useInputState';
import {useSelector} from 'react-redux';
import {addTodo} from '../../actions';

import "./TodoForm.scss";



export default function TodoForm() {

    const dispatch = useDispatch();

    const history = useHistory();

    const isDark = useSelector(state =>  state.darkTheme);

    const [title, changeTitle, resetTitle] = useInputState("");
    const [desc, changeDesc, resetDesc] = useInputState("");
    const [due, changeDue, resetDue] = useInputState("");
    const [status, changeStatus, resetStatus] = useInputState("");

    const [popup, setPopup] = useState("popup");
    const inputClass = isDark ? "form__input dark" : "form__input";
    const labelClass = isDark ? "form__label dark" : "form__label";

    const handleSubmit = (e) => {
        e.preventDefault();
        setPopup("popup active");  
    }

    const handlePopupCancel = (e) => {
        setPopup("popup");
    }

    const handlePopupConfirm = (e) => {
        dispatch(addTodo(title, desc, due, status));

        resetTitle();
        resetDesc();
        resetDue();
        resetStatus();

        history.push("/todo/list");
    }

    return (
        <div className={isDark ? "container dark" : "container light"}>

            <div className={popup}>
                <h2>YOUR TODO</h2>
                <div className="popup__section popup__head">
                    <span>Task :</span> {title} 
                </div>
                <div className="popup__section popup__desc">
                    <span>Description :</span> {desc} 
                </div>
                <div className="popup__section popup__date">
                    <span>Due Date :</span> {due} 
                </div>
                <div className="popup__section popup__status">
                    <span>Status :</span> {status} 
                </div>
                <div className="popup__btns">
                    <div onClick={handlePopupConfirm} className="popup__btns-confirm">Confirm</div>
                    <div onClick={handlePopupCancel} className="popup__btns-cancel">Cancel</div>
                </div>
            </div>

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
                <div className="btn-container">
                    <button className="button" type="submit">SUBMIT</button>
                    <div></div>
                    <button onClick={() => history.push("/todo/list")} className="button" >CANCEL</button>
                </div>    

            </form>
        </div>
    )
}