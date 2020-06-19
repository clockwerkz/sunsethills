import React from 'react';
import logo from '../images/sunset-512.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="navbar__img" src={logo} />
            <div className="navbar__title-wrapper">
                <h2 className="navbar__title">Sunset Hills <span className="navbar__subtitle">Challenge</span></h2>
            </div>
        </div>
    )
}

export default NavBar;