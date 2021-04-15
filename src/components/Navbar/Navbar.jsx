import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import Switch from 'react-switch';
import { useSelector ,useDispatch} from 'react-redux';
import {toggleTheme} from '../../actions'

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
                <Switch onChange={changeTheme} checked={isDark}/>
            </div>
            <div className="nav__item">
                <div className="nav__item-brand">
                    <Link to="/">Todos-App</Link>
                </div>
            </div>
        </div>
    )
}
