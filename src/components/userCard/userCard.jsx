import React from 'react';
import styles from './userCard.module.css';
const UserCard = ({name,photo}) => {
        return(
            <div className={styles.cardWrap}>
                <p className={styles.nameWrap}>안녕하세요 <span className={styles.name}>{name}</span> 님</p>
                <img className={styles.photo} src={photo} alt="" />
            </div>
        );
        };

export default UserCard;
