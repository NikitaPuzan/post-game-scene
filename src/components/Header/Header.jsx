import React from 'react';
import './css/header.css'
import HeaderItems from "./HeaderItems";

const Header = () => {
    return (
        <div className="header-container">
            <HeaderItems/>
            <HeaderItems/>
        </div>
    );
};

export default Header;