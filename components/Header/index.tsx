import React from 'react';
import styles from './Header.module.scss';

const Header: React.FunctionComponent = ({ children }) => (
    <header className={styles.header}>
        {children}
    </header>
);

export default Header;