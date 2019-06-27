import React from 'react';
import './Header.css';
import Search from './Search';
import logo from './logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
           <Link to="/"> <img src={logo} alt='logo' className="Header-logo"></img> </Link>
           <Search/>
        </div>
    );
}

export default Header;