import React, {useState} from 'react';

import { useSelector ,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';

import {toggleTheme} from '../../actions'

import './Navbar.scss';

export default function Navbar() {
    const dispatch = useDispatch()

    const [isDark, setIsDark] = useState(useSelector(state => state.darkTheme));

    const changeTheme = () => {
        setIsDark(!isDark);
        dispatch(toggleTheme());
    }
    
    return (
        <div className={isDark ? "nav dark" : "nav light"}>
            <div className="nav__item">
                <Switch title="switch" onChange={changeTheme} checked={isDark}/>
            </div>
            <div className="nav__item">
                <div className="nav__item-brand">
                    <Link title="link" to="/todo/list">Todos-App</Link>
                </div>
            </div>
        </div>
    )
}
