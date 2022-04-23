import React from 'react';
import styles from './header.module.css';
const Header = ({onLogout}) => {
    return(
        <header>
        {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
        </header>
    );
};

export default Header;