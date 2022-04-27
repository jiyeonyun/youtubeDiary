import React, { useRef } from 'react';
import styles from './writeModal.module.css';
const WriteModal = ({WriteChange}) =>{
    const textRef = useRef('');
    return(
        <div className={styles.modal}>
            <textarea ref={textRef} className={styles.textArea} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={WriteChange}>go</button>
        </div>
    )
};

export default WriteModal;