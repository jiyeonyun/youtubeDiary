import React, { useRef, useState } from 'react';
import styles from './writeModal.module.css';
const WriteModal = ({WriteChange}) =>{
    const[inputVal,setInputVal] = useState('');
    console.log(inputVal);
    let write = inputVal;
    return(
        <div className={styles.modal}>
            <input onChange={(e)=>setInputVal(e.target.value)} className={styles.textArea} name="" id="" cols="30" rows="10"></input>
            <button onClick={WriteChange(write)}>go</button>
        </div>
    )
};

export default WriteModal;