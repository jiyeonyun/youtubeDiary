import React from 'react';
import styles from './userCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut  } from '@fortawesome/free-solid-svg-icons';
import { faBookmark,faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const UserCard = ({name,photo,onLogout}) => {
    const navigator = useNavigate();
    const goBookMark = ()=>{
        navigator('/bookmark');
    };
        return(
            <div className={styles.cardWrap}>
                    {onLogout && (<button className={styles.logout} onClick={onLogout}><FontAwesomeIcon icon={faSignOut} /></button>)}
                <div className={styles.profileWrap}>
                    <img className={styles.photo} src={photo} alt="" />
                    <p className={styles.nameWrap}>안녕하세요 <span className={styles.name}>{name}</span> 님</p>
                </div>
                <div className={styles.buttonWrap}>
                    <button onClick={goBookMark} className={styles.button}><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
        );
        };

export default UserCard;
