import React, { useRef, useState } from 'react';
import styles from './writeModal.module.css';
const WriteModal = ({WriteChange}) =>{
    const[inputVal,setInputVal] = useState('');
    let write = inputVal;
    const click = (e)=>{
        e.stopPropagation();
        WriteChange(write)
    }
    return(
        <div className={styles.modal}>
            <input onChange={(e)=>setInputVal(e.target.value)} className={styles.textArea} cols="30" rows="10"></input>
            <button onClick={click}>go</button>
        </div>
    )
};

export default WriteModal;