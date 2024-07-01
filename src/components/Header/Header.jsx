import React from 'react';
import './css/header.css'

const Header = () => {
    const headerComponent =  <div className="header">
        <div className="header-item">Nickname</div>
        <div className="header-item">Score</div>
        <div className="header-item">Status</div>
    </div>;

    return (
        <div className="header-container">
            {headerComponent}
            {headerComponent}
        </div>
    );
};

export default Header;