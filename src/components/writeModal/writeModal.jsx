import React from 'react';
import styles from './writeModal.module.css';
const WriteModal = (props) =>{
    return(
        <div className={styles.modal}>
            <textarea  className={styles.textArea} name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
};

export default WriteModal;