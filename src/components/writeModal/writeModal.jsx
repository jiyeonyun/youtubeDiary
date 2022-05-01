import React, { useState } from 'react';
import styles from './writeModal.module.css';
const WriteModal = ({WriteChange}) =>{
    const[inputVal,setInputVal] = useState('');
    const[popup,setPopup] = useState(false);
    let write = inputVal;
    const click = (e)=>{
        e.stopPropagation();
        WriteChange(write)
        setPopup(true);
        setTimeout(function(){setPopup(false);},1000);
    }
    return(
        <div className={styles.modal}>
            <input onChange={(e)=>setInputVal(e.target.value)} className={styles.textArea} cols="30" rows="10" autofocus></input>
            <button onClick={click}>Enter</button>
            {
                popup && <div className={styles.popup}>
                            <h3 className={styles.h3}>코멘트가 저장되었습니다✅</h3>
                        </div>
            }
        </div>
    )
};

export default WriteModal;