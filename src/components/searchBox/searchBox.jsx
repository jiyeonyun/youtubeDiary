import React, { useRef } from 'react';
import styles from './searchBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faRefresh  } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({search}) => {
    const inputRef = useRef();
    const handleSearch = () =>{
        const value = inputRef.current.value;
        search(value);
    };
    const onClick = ()=> {
        handleSearch();
    };
    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    };
    const reload= ()=>{
        window.location.reload();
    }
    return(
        <div className={styles.SearchBox}>
        <input 
            ref={inputRef}
            className={styles.input} 
            type="search" 
            placeholder='Search...' 
            onKeyPress={onKeyPress}
        />
            <button className={styles.button} type='submit' onClick={onClick}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className={styles.button} type='submit' onClick={reload}>
                <FontAwesomeIcon icon={faRefresh} />
            </button>
        </div>
    );
};

export default SearchBox;