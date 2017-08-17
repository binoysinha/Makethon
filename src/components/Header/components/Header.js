import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

const Header = () => {
    return(
        <header className="header">
            <Link className="logo" to="/"><img src="https://m.redbus.in/public/Images/redbus_logo.png" alt="logo"/></Link>
            <span className="header-text">Conductor Helper</span>
        </header>
    )
}

export default Header;