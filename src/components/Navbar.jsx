import React from 'react';
import {NavLink} from 'react-router-dom';
import {SearchIcon, SunIcon, MoonIcon, UserIcon} from './ThemeIcons.jsx';
import './Navbar.css';
import {Sun} from "lucide-react";

const NAV_LINKS = [
    {name: '主页', path: '/'},
    {name: '论坛', path: '/forum'},
    {name: 'Wiki', path: '/wiki'},
];

const Navbar = ({theme, toggleTheme}) => {
    return (
        <div className="navbar-capsule">
            <div className="nav-links-container">
                {NAV_LINKS.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className="nav-link"
                    >
                        {link.name}
                    </NavLink>
                ))}
                <button className="nav-action-button nav-link-button">
                    <SearchIcon/>
                </button>
                <button className="nav-action-button nav-link-button">
                    <UserIcon/>
                </button>
            </div>
            <div className="nav-actions-container">
                <button onClick={toggleTheme} className="nav-action-button">
                    {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
