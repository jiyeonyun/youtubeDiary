import React, { useState } from 'react';
import styles from './bookmarkItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { dbService } from '../../service/mybase';
import { doc, deleteDoc }from"firebase/firestore";
const BookmarkItem = ({item}) => {
    let length = 30;
    const id = item.id
    const[click,setClick] = useState(false);
    const onClick = ()=>{
        setClick(!click);
    }
    const onDeleteClick = async(e)=>{
        const ok = window.confirm('이 비디오를 삭제 하시겠습니까?');
        if(ok){
            await deleteDoc(doc(dbService, "savedVideos", `${id}`));
            window.location.reload();
        }
        
    };
    return(
        <li className={styles.li}>
            <div>
            <img className={styles.img} src={item.img} alt="" />
                <div className={styles.liWrap}>
                    <div className={styles.desWrap}>
                        <p className={styles.title}>{item.name.length>length? item.name.substr(0, length - 2) + '...' :item.name}</p>
                        <p className={styles.channelName}>{item.channelName}</p>
                        <p className={styles.date}>{item.date}</p>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={onDeleteClick} className={styles.button}><FontAwesomeIcon className={styles.icon} icon={faTrashCan} /></button>
                        <button onClick={onClick} className={styles.button}><FontAwesomeIcon  icon={faComment} /></button>
                    </div>
                </div>
            </div>
                {
                    click && 
                    <div>
                        <ul>
                        {item.write.map((i=>{
                            return <li key={i}> {i} </li>
                        }))}
                        </ul>
                    </div>
                }
        </li>
    );
};

export default BookmarkItem;