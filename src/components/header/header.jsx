import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi ,faBatteryFull  } from '@fortawesome/free-solid-svg-icons';
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};
const Header = () => {
    let now = new Date();
    const [hour, setHour] = useState(padNumber(now.getHours(), 2));
    const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
    const interval = useRef(null);
    useEffect(() => {
        interval.current = setInterval(() => {
            now = new Date();
            setHour(padNumber(now.getHours(), 2));
            setMin(padNumber(now.getMinutes(), 2));
        }, 1000);
        return () => clearInterval(interval.current);
        }, []);
    return(
        <header className={styles.header}>
            <span className={styles.headerIcon}><FontAwesomeIcon icon={faWifi} /></span>
            <span className={styles.headerTime}> {hour} : {min} </span>
            <span className={styles.headerIcon}><FontAwesomeIcon icon={faBatteryFull} /></span>
        </header>
    );
};

export default Header;