import React from 'react';
import './Header.scss';

const Header: React.FunctionComponent = ({ children }) => (
    <header className="Header">
        {children}
    </header>
);

export default Header;