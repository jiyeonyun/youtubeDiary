import React from 'react';
import styles from './userCard.module.css';
const UserCard = ({name,photo,onLogout}) => {
        return(
            <div className={styles.cardWrap}>
                    {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
                <div className={styles.profileWrap}>
                    <img className={styles.photo} src={photo} alt="" />
                    <p className={styles.nameWrap}>안녕하세요 <span className={styles.name}>{name}</span> 님</p>
                </div>
                <div className={styles.buttonWrap}>
                    <button className={styles.button}>저장된 동영상</button>
                    <button className={styles.button}>다이어리</button>
                </div>
            </div>
        );
        };

export default UserCard;
