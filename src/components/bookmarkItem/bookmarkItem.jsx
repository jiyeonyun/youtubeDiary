import React from 'react';
import styles from './bookmarkItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const BookmarkItem = ({item,youtube,authService}) => {
    let length = 30;

    return(
        <li className={styles.li}>
        {/* <img className={styles.img} src={item.img} alt="" />
        <div className={styles.desWrap}>
            <p className={styles.title}>{item.name.length>length? item.name.substr(0, length - 2) + '...' :item.name}</p>
            <p className={styles.channelName}>{item.channelName}</p>
            <p className={styles.date}>{item.date}</p>
        </div>
        <div className={styles.buttons}>
            <button className={styles.button}><FontAwesomeIcon className={styles.icon} icon={faBookmark} /></button>
            <button className={styles.button}><FontAwesomeIcon  icon={faFilePen} /></button>
        </div> */}
    </li>
    );
};

export default BookmarkItem;